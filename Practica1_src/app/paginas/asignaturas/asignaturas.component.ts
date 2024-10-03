import { Component } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [],
  templateUrl: './asignaturas.component.html',
  styleUrl: './asignaturas.component.css'
})
export class AsignaturasComponent {
  nombre:string = "Desarrollo app híbridas";
  profesor:string = "Rosa Rodriguez";
  curso:string = "DAW2";
}
