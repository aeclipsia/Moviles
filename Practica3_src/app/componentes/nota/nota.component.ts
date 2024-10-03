import { Component } from '@angular/core';
import { INota } from './INota';

@Component({
  selector: 'app-nota',
  standalone: false,
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent {

  list:INota[]=[];

  constructor(){
    this.list=[
      {
        asignatura:"Servidor",
        nombre:"Jared",
        nota:8,
      },
      {
        asignatura:"Cliente",
        nombre:"Laura",
        nota:3,
      },
      {
        asignatura:"Despliegue",
        nombre:"Rulas",
        nota:7,
      },
    ]
  }

}
