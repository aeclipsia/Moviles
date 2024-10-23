import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  movieTitle: string = 'Kimi no Nawa';
  movieEnglishTitle: string = 'Your Name';
  movieYear: number = 2016;
  movieDuration: string = '1h 46min';
  movieGenre: string = 'Animation, Drama, Fantasy';
  movieDescription: string =
    'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?';
}
