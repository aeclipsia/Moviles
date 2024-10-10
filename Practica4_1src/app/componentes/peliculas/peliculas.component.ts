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
    this.list = [
      {
        titulo: "Inside Out 2",
        director: "Kelsey Mann",
        year: 2024,
        image: "assets/inside-out.jpg"
      },
      {
        titulo: "The Little Mermaid",
        director: "Ron Clements, John Musker",
        year: 1989,
        image: "assets/mermaid.jpg"
      },
      {
        titulo: "Beauty and the Beast",
        director: "Gary Trousdale, Kirk Wise",
        year: 1991,
        image: "assets/beast.jpg"
      },
      {
        titulo: "Toy Story",
        director: "John Lasseter",
        year: 1995,
        image: "assets/toy-story.jpeg"
      },
      {
        titulo: "Monsters, Inc.",
        director: "Pete Docter, David Silverman, Lee Unkrich",
        year: 2001,
        image: "assets/monsters.jpeg"
      },
      {
        titulo: "Mulan",
        director: "Tony Bancroft, Barry Cook",
        year: 1998,
        image: "assets/mulan.jpg"
      },
      {
        titulo: "Aladdin",
        director: "Ron Clements, John Musker",
        year: 1992,
        image: "assets/aladdin.jpg"
      },
      {
        titulo: "Frozen",
        director: "Chris Buck, Jennifer Lee",
        year: 2013,
        image: "assets/frozen.jpg"
      },
      {
        titulo: "The Lion King",
        director: "Roger Allers, Rob Minkoff",
        year: 1994,
        image: "assets/lion.jpg"
      },
      {
        titulo: "Coco",
        director: "Lee Unkrich, Adrian Molina",
        year: 2017,
        image: "assets/coco.jpg"
      },
      {
        titulo: "Finding Nemo",
        director: "Andrew Stanton",
        year: 2003,
        image: "assets/nemo.jpg"
      },
      {
        titulo: "Ratatouille",
        director: "Brad Bird, Jan Pinkava",
        year: 2007,
        image: "assets/ratatouille.jpg"
      },
      {
        titulo: "Moana",
        director: "Ron Clements, John Musker",
        year: 2016,
        image: "assets/moana.jpg"
      },
      {
        titulo: "Up",
        director: "Pete Docter",
        year: 2009,
        image: "assets/up.jpg"
      },
      {
        titulo: "Brave",
        director: "Mark Andrews, Brenda Chapman",
        year: 2012,
        image: "assets/brave.jpg"
      },
      {
        titulo: "The Incredibles",
        director: "Brad Bird",
        year: 2004,
        image: "assets/incredibles.jpg"
      },
      {
        titulo: "Tangled",
        director: "Nathan Greno, Byron Howard",
        year: 2010,
        image: "assets/tangled.jpg"
      },
      {
        titulo: "The Jungle Book",
        director: "Wolfgang Reitherman",
        year: 1967,
        image: "assets/mowgli.jpg"
      },
      {
        titulo: "Lilo & Stitch",
        director: "Chris Sanders, Dean DeBlois",
        year: 2002,
        image: "assets/lilo.jpg"
      },
      {
        titulo: "Zootopia",
        director: "Byron Howard, Rich Moore",
        year: 2016,
        image: "assets/zootopia.jpg"
      },
      {
        titulo: "The Princess and the Frog",
        director: "Ron Clements, John Musker",
        year: 2009,
        image: "assets/frog.jpg"
      },
      {
        titulo: "Frozen II",
        director: "Chris Buck, Jennifer Lee",
        year: 2019,
        image: "assets/frozen2.jpg"
      },
      {
        titulo: "Wreck-It Ralph",
        director: "Rich Moore",
        year: 2012,
        image: "assets/ralph.jpg"
      },
      {
        titulo: "Encanto",
        director: "Jared Bush, Byron Howard",
        year: 2021,
        image: "assets/encanto.jpg"
      }
    ];    
  }
}
