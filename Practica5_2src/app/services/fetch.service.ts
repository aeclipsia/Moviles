import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMensaje } from '../interfaces/IMensaje';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  getMensajes(): Observable<IMensaje[]> {
    return this.http.get<IMensaje[]>('data/mensajes.json');
  }
}
