import { Component } from '@angular/core';
import { IMedia } from '../../../interfaces/IMedia';
import { IAVisualService } from '../../../services/iavisual.service';

@Component({
  selector: 'app-peliculas',
  standalone: false,
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
})
export class PeliculasComponent {
  list: IMedia[] = [];

  constructor(private peliculas: IAVisualService) {}

  ngOnInit() {
    this.list = this.peliculas.getPeliculas();
  }
}
