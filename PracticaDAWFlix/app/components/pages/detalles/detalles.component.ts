import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IAVisualService } from '../../../services/iavisual.service';
import { IMedia } from '../../../interfaces/IMedia';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent {
  pelicula: IMedia | undefined;

  constructor(
    private route: ActivatedRoute,
    private peliculas: IAVisualService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const titulo = params['titulo'];
      this.pelicula = this.peliculas.getOne(titulo);
    });
  }
}
