import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { IAVisualService } from '../../../services/iavisual.service';
import { IMedia } from '../../../interfaces/IMedia';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent {
  pelicula: IMedia | undefined;

  constructor(
    private route: ActivatedRoute,
    private peliculas: IAVisualService,
    private location: Location
  ) {}

  ngOnInit(): void {
    let titulo = '';

    this.route.params.subscribe((params) => {
      titulo = params['titulo'];
      this.getPelicula(titulo);
    });
  }

  getPelicula(titulo: string): void {
    this.peliculas.getOne(titulo).subscribe((data: IMedia) => {
      this.pelicula = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}