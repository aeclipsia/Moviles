import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { IAVisualService } from '../../../services/iavisual.service';
import { IMedia } from '../../../interfaces/IMedia';

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
    this.route.params.subscribe((params) => {
      const titulo = params['titulo'];
      this.pelicula = this.peliculas.getOne(titulo);
    });
    this.peliculas.getOne(titulo).subscribe(
      (result) => {
        this.item = result;
        console.log(this.item);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
