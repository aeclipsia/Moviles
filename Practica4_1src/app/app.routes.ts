import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { SeriesComponent } from './componentes/series/series.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';

export const routes: Routes = [
    {path:'', component:HomepageComponent},
    {path:'series', component:SeriesComponent},
    {path:'pelis', component:PeliculasComponent},
    {path:'pelis/:index', component:DetallesComponent}
];