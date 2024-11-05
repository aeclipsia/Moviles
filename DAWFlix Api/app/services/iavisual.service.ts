import { Injectable } from '@angular/core';
import { IMedia } from '../interfaces/IMedia';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IAVisualService {
  private media: IMedia[] = [];

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<IMedia[]> {
    return this.http.get<IMedia[]>('/data/peliculas.json');
    // return this.media.filter((item) => item.temporada == 0);
  }

  getSeries(): Observable<IMedia[]> {
    return this.http.get<IMedia[]>('/data/series.json');
    // return this.media.filter((item) => item.temporada != 0);
  }

  getOne(title: string): Observable<IMedia> {
    return this.http.get<IMedia[]>('/data/peliculas.json').pipe(
      switchMap((peliculas) => {
        // Try to find the item in the first file
        const foundItem = peliculas.find((item) => item['titulo'] === title);

        // If found in the first file, return it immediately
        if (foundItem) {
          return of(foundItem);
        }

        // Otherwise, search in the second file
        return this.http
          .get<any[]>('/data/series.json')
          .pipe(
            map(
              (series) =>
                series.find((item) => item['titulo'] === title) || null
            )
          );
      })
    );
  }
}
