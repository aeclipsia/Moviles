import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SeriesComponent } from './pages/series/series.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'movies', component: PeliculasComponent },
  { path: 'pelis/:index', component: DetallesComponent },
];
