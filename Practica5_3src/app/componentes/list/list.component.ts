import { Component } from '@angular/core';
import { NombresService } from '../../services/nombres.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private ser: NombresService) {}

  list = this.ser.getLista();

  remove(nombre: string) {
    this.ser.removeFromLista(nombre);
  }

  removeAll() {
    this.ser.removeAll();
    this.list = this.ser.getLista();
  }
}
