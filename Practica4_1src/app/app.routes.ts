import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { SeriesComponent } from './componentes/series/series.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';

export const routes: Routes = [
    {path:'', component:HomepageComponent},
    {path:'series', component:SeriesComponent},
    {path:'pelis', component:PeliculasComponent}
];