import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SeriesComponent } from './pages/series/series.component';
import { MoviesComponent } from './pages/movies/movies.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'Series',component:SeriesComponent},
    {path:'Peliculas',component:MoviesComponent}
];
