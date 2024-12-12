import { Component } from '@angular/core';
import { IPersonaje } from '../IPersonaje';
import { MainService } from '../main.service';

@Component({
  selector: 'app-personajes',
  standalone: false,
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
})
export class PersonajesComponent {
  prota: IPersonaje[] = [];
  extra: IPersonaje[] = [];
  current: IPersonaje | undefined;

  constructor(private servicio: MainService) {
    this.prota = this.servicio.getProta();
    this.extra = this.servicio.getExtra();
  }

  showInfo(id: Number) {
    this.current = undefined;
    this.current = this.servicio.getOne(id);
  }
}
