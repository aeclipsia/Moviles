import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersonaje } from './IPersonaje';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  prota: IPersonaje[] = [];
  extra: IPersonaje[] = [];

  constructor(private http: HttpClient) {
    this.http.get<IPersonaje[]>('/data/examen.json').subscribe((item) => {
      item.forEach((e) => {
        if (e.id == 1) {
          this.prota.push(e);
        } else {
          this.extra.push(e);
        }
      });
    });
  }

  public getProta() {
    return this.prota;
  }

  public getExtra() {
    return this.extra;
  }

  public getOne(id: Number) {
    let personaje: IPersonaje | undefined;
    return this.extra.find((p) => p.id == id);
  }
}
