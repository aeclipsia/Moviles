import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ISeries } from './ISeries';

@Component({
  selector: 'app-series',
  standalone: false,
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  lista_series: ISeries[] = [];

  constructor() {
    this.lista_series = [
      {
        titulo: 'Stranger Things',
        director: 'The Duffer Brothers',
        year: 2016,
        image: 'assets/series/stranger.jpg',
      },
      {
        titulo: 'Naruto',
        director: 'Masashi Kishimoto',
        year: 2002,
        image: 'assets/series/naruto.jpg',
      },
      {
        titulo: 'Attack on Titan',
        director: 'Tetsurō Araki',
        year: 2013,
        image: 'assets/series/aot.jpg',
      },
      {
        titulo: 'The Mandalorian',
        director: 'Jon Favreau',
        year: 2019,
        image: 'assets/series/mandalorian.jpg',
      },
      {
        titulo: 'Avatar: The Last Airbender',
        director: 'Michael Dante DiMartino, Bryan Konietzko',
        year: 2005,
        image: 'assets/series/avatar.jpg',
      },
      {
        titulo: 'SpongeBob SquarePants',
        director: 'Stephen Hillenburg',
        year: 1999,
        image: 'assets/series/spongebob.jpg',
      },
      {
        titulo: 'Dragon Ball Z',
        director: 'Akira Toriyama',
        year: 1989,
        image: 'assets/dragonball-z.jpg',
      },
      {
        titulo: 'Rick and Morty',
        director: 'Dan Harmon, Justin Roiland',
        year: 2013,
        image: 'assets/rick-and-morty.jpg',
      },
      {
        titulo: 'One Piece',
        director: 'Eiichiro Oda',
        year: 1999,
        image: 'assets/one-piece.jpg',
      },
      {
        titulo: 'Breaking Bad',
        director: 'Vince Gilligan',
        year: 2008,
        image: 'assets/breaking-bad.jpg',
      },
      {
        titulo: 'Game of Thrones',
        director: 'David Benioff, D.B. Weiss',
        year: 2011,
        image: 'assets/game-of-thrones.jpg',
      },
      {
        titulo: 'My Hero Academia',
        director: 'Kenji Nagasaki',
        year: 2016,
        image: 'assets/my-hero-academia.jpg',
      },
      {
        titulo: 'The Witcher',
        director: 'Lauren Schmidt Hissrich',
        year: 2019,
        image: 'assets/witcher.jpg',
      },
      {
        titulo: 'The Simpsons',
        director: 'Matt Groening',
        year: 1989,
        image: 'assets/simpsons.jpg',
      },
      {
        titulo: 'The Boys',
        director: 'Eric Kripke',
        year: 2019,
        image: 'assets/the-boys.jpg',
      },
      {
        titulo: 'Cowboy Bebop',
        director: 'Shinichirō Watanabe',
        year: 1998,
        image: 'assets/cowboy-bebop.jpg',
      },
      {
        titulo: 'The Crown',
        director: 'Peter Morgan',
        year: 2016,
        image: 'assets/the-crown.jpg',
      },
      {
        titulo: 'Peaky Blinders',
        director: 'Steven Knight',
        year: 2013,
        image: 'assets/peaky-blinders.jpg',
      },
      {
        titulo: 'The Office',
        director: 'Greg Daniels',
        year: 2005,
        image: 'assets/the-office.jpg',
      },
      {
        titulo: 'Adventure Time',
        director: 'Pendleton Ward',
        year: 2010,
        image: 'assets/adventure-time.jpg',
      },
      {
        titulo: 'Death Note',
        director: 'Tetsurō Araki',
        year: 2006,
        image: 'assets/death-note.jpg',
      },
      {
        titulo: 'One Punch Man',
        director: 'Shingo Natsume',
        year: 2015,
        image: 'assets/one-punch-man.jpg',
      },
      {
        titulo: 'Gravity Falls',
        director: 'Alex Hirsch',
        year: 2012,
        image: 'assets/gravity-falls.jpg',
      },
      {
        titulo: 'The Powerpuff Girls',
        director: 'Craig McCracken',
        year: 1998,
        image: 'assets/powerpuff-girls.jpg',
      },
      {
        titulo: 'Futurama',
        director: 'Matt Groening',
        year: 1999,
        image: 'assets/futurama.jpg',
      },
      {
        titulo: 'Teen Titans',
        director: 'Glen Murakami',
        year: 2003,
        image: 'assets/teen-titans.jpg',
      },
      {
        titulo: 'BoJack Horseman',
        director: 'Raphael Bob-Waksberg',
        year: 2014,
        image: 'assets/bojack-horseman.jpg',
      },
    ];
  }
}
