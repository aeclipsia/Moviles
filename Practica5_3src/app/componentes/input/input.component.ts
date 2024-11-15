import { Component } from '@angular/core';
import { NombresService } from '../../services/nombres.service';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  nombre: string = '';

  constructor(private ser: NombresService) {}

  add() {
    if (this.nombre.trim()) {
      this.ser.addToLista(this.nombre);
      this.nombre = '';
    }
  }
}
