import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { IPeliculas } from '../peliculas/IPeliculas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  pelicula:IPeliculas | undefined;

  constructor(private route:ActivatedRoute, private peliculas:PeliculasService){}

  ngOnInit():void{
    this.route.params.subscribe(params=>{
        const index = +params['index'];
        this.pelicula = this.peliculas.getPelicula(index);
      }
    )
  }
}