import { Component } from '@angular/core';
import { IPeliculas } from './IPeliculas';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  standalone: false,
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
})
export class PeliculasComponent {
  list: IPeliculas[] = [];

  constructor(
    private peliculas: PeliculasService,
    private current: ActivatedRoute
  ) {}

  ngOnInit() {
    this.list = this.peliculas.getCatalogo();
  }

  currentPelicula: any = null;
  currentIndex: any = null;

  show(p: any, i: any) {
    this.currentPelicula = p;
    this.currentIndex = i;
  }

  closeCard() {
    this.currentPelicula = null;
  }
}
