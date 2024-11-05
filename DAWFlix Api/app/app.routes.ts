import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SeriesComponent } from './components/pages/series/series.component';
import { PeliculasComponent } from './components/pages/peliculas/peliculas.component';
import { DetallesComponent } from './components/pages/detalles/detalles.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'movies', component: PeliculasComponent },
  { path: 'series/:titulo', component: DetallesComponent },
  { path: 'pelis/:titulo', component: DetallesComponent },
];
