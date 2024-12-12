import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NombresService {
  lista: string[] = [];

  constructor() {}

  getLista(): string[] {
    return this.lista;
  }

  addToLista(nombre: string) {
    const pos = this.lista.indexOf(nombre);
    if (pos == -1) {
      this.lista.push(nombre);
    }
  }

  removeFromLista(nombre: string) {
    const pos = this.lista.indexOf(nombre);
    if (pos > -1) {
      this.lista.splice(pos, 1);
    }
  }

  removeAll() {
    this.lista = [];
  }
}
