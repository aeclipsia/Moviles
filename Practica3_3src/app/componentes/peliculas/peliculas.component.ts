import { Component } from '@angular/core';
import { IPeliculas } from './IPeliculas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  list:IPeliculas[]=[];

  constructor(){
    this.list=[
      {
        titulo: "Inside Out 2",
        director: "Kelsey Mann",
        year: 2024,
        image: "https://pics.filmaffinity.com/Del_revaes_2_Inside_Out_2-365634749-large.jpg"
      },
      {
        titulo: "Spirited Away",
        director: "Hayao Miyazaki",
        year: 2024,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5usxSV_TY6ZqbNkEz3jEHI-7Df5DBt4vNQ&s"
      },
      {
        titulo: "Rocky",
        director: "John G. Avildsen",
        year: 1976,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQ5Z4KJp83NrIB9aq-Ko0dJrr1iA8_QgIpQ&s"
      }
    ]
  }
}
