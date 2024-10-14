import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { SeriesComponent } from './componentes/series/series.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PeliculasComponent,NavbarComponent,HomepageComponent,SeriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}
