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
  list: IPeliculas[] = [];

  constructor() {
    this.list = [
      {
        titulo: "Inside Out 2",
        director: "Kelsey Mann",
        year: 2024,
        image: "assets/peliculas/inside-out.jpg",
        plot: "Riley ahora es adolescente y enfrenta nuevas emociones mientras navega por su vida de secundaria.",
        rating: 8.5
      },
      {
        titulo: "The Little Mermaid",
        director: "Ron Clements, John Musker",
        year: 1989,
        image: "assets/peliculas/mermaid.jpg",
        plot: "Ariel, una joven sirena, sueña con vivir en la superficie y enamorarse de un príncipe humano.",
        rating: 8.0
      },
      {
        titulo: "Beauty and the Beast",
        director: "Gary Trousdale, Kirk Wise",
        year: 1991,
        image: "assets/peliculas/beast.jpg",
        plot: "Bella se encuentra atrapada en un castillo con una bestia encantada, pero el amor verdadero puede romper la maldición.",
        rating: 8.4
      },
      {
        titulo: "Toy Story",
        director: "John Lasseter",
        year: 1995,
        image: "assets/peliculas/toy.jpg",
        plot: "Los juguetes de Andy cobran vida cuando no hay humanos cerca, liderados por Woody y Buzz Lightyear.",
        rating: 8.3
      },
      {
        titulo: "Monsters, Inc.",
        director: "Pete Docter, David Silverman, Lee Unkrich",
        year: 2001,
        image: "assets/peliculas/monsters.jpg",
        plot: "Dos monstruos descubren que asustar niños no es tan fácil cuando una niña entra en su mundo.",
        rating: 8.1
      },
      {
        titulo: "Mulan",
        director: "Tony Bancroft, Barry Cook",
        year: 1998,
        image: "assets/peliculas/mulan.jpg",
        plot: "Mulan toma el lugar de su padre en el ejército chino para salvar su honor y proteger a su país.",
        rating: 7.8
      },
      {
        titulo: "Aladdin",
        director: "Ron Clements, John Musker",
        year: 1992,
        image: "assets/peliculas/aladdin.jpg",
        plot: "Aladdin encuentra una lámpara mágica que le concede deseos mientras trata de ganar el corazón de la princesa Jasmine.",
        rating: 8.0
      },
      {
        titulo: "Frozen",
        director: "Chris Buck, Jennifer Lee",
        year: 2013,
        image: "assets/peliculas/frozen.jpg",
        plot: "Anna se embarca en una aventura para encontrar a su hermana Elsa, cuyos poderes de hielo han atrapado su reino en invierno eterno.",
        rating: 7.5
      },
      {
        titulo: "The Lion King",
        director: "Roger Allers, Rob Minkoff",
        year: 1994,
        image: "assets/peliculas/lion.jpg",
        plot: "Simba, un joven león, debe reclamar su lugar como rey tras la traición de su tío Scar.",
        rating: 8.5
      },
      {
        titulo: "Coco",
        director: "Lee Unkrich, Adrian Molina",
        year: 2017,
        image: "assets/peliculas/coco.jpg",
        plot: "Miguel, un joven aspirante a músico, se adentra en el Mundo de los Muertos para descubrir el misterio de su familia.",
        rating: 8.4
      },
      {
        titulo: "Finding Nemo",
        director: "Andrew Stanton",
        year: 2003,
        image: "assets/peliculas/nemo.jpg",
        plot: "Un pez payaso llamado Marlin emprende un viaje para rescatar a su hijo Nemo, quien ha sido capturado por un buzo.",
        rating: 8.1
      },
      {
        titulo: "Ratatouille",
        director: "Brad Bird, Jan Pinkava",
        year: 2007,
        image: "assets/peliculas/rat.jpg",
        plot: "Remy, una rata con un don para la cocina, persigue su sueño de ser chef en un famoso restaurante parisino.",
        rating: 8.0
      },
      {
        titulo: "Moana",
        director: "Ron Clements, John Musker",
        year: 2016,
        image: "assets/peliculas/moana.jpg",
        plot: "Moana, la hija de un jefe polinesio, se embarca en una peligrosa travesía para salvar a su pueblo con la ayuda del semidiós Maui.",
        rating: 7.6
      },
      {
        titulo: "Up",
        director: "Pete Docter",
        year: 2009,
        image: "assets/peliculas/up.jpg",
        plot: "Carl Fredricksen, un anciano viudo, viaja a Sudamérica en su casa flotante, acompañado por un joven explorador llamado Russell.",
        rating: 8.2
      },
      {
        titulo: "Brave",
        director: "Mark Andrews, Brenda Chapman",
        year: 2012,
        image: "assets/peliculas/brave.jpg",
        plot: "Mérida, una princesa escocesa, desafía las tradiciones familiares mientras lucha por controlar su propio destino.",
        rating: 7.1
      },
      {
        titulo: "The Incredibles",
        director: "Brad Bird",
        year: 2004,
        image: "assets/peliculas/incredibles.jpg",
        plot: "Una familia de superhéroes trata de vivir una vida normal hasta que deben volver a la acción para salvar el mundo.",
        rating: 8.0
      },
      {
        titulo: "Tangled",
        director: "Nathan Greno, Byron Howard",
        year: 2010,
        image: "assets/peliculas/tangled.jpg",
        plot: "Rapunzel, una joven con un largo cabello mágico, escapa de su torre con la ayuda de un ladrón encantador.",
        rating: 7.7
      },
      {
        titulo: "The Jungle Book",
        director: "Wolfgang Reitherman",
        year: 1967,
        image: "assets/peliculas/mowgli.jpg",
        plot: "Mowgli, un niño criado por lobos, navega por la selva mientras es perseguido por el temible tigre Shere Khan.",
        rating: 7.6
      },
      {
        titulo: "Lilo & Stitch",
        director: "Chris Sanders, Dean DeBlois",
        year: 2002,
        image: "assets/peliculas/lilo.jpg",
        plot: "Lilo, una niña hawaiana, adopta a Stitch, un extraterrestre travieso que está huyendo de las autoridades galácticas.",
        rating: 7.3
      },
      {
        titulo: "Zootopia",
        director: "Byron Howard, Rich Moore",
        year: 2016,
        image: "assets/peliculas/zootopia.jpg",
        plot: "En una ciudad habitada por animales, una coneja policía y un zorro estafador unen fuerzas para resolver una misteriosa desaparición.",
        rating: 8.0
      },
      {
        titulo: "The Princess and the Frog",
        director: "Ron Clements, John Musker",
        year: 2009,
        image: "assets/peliculas/frog.jpg",
        plot: "Tiana, una joven camarera de Nueva Orleans, sueña con abrir su propio restaurante mientras se ve envuelta en un encantamiento.",
        rating: 7.1
      },
      {
        titulo: "Frozen II",
        director: "Chris Buck, Jennifer Lee",
        year: 2019,
        image: "assets/peliculas/frozen2.jpg",
        plot: "Anna, Elsa, Kristoff y Olaf se embarcan en una nueva aventura para descubrir el origen de los poderes de Elsa.",
        rating: 6.9
      },
      {
        titulo: "Wreck-It Ralph",
        director: "Rich Moore",
        year: 2012,
        image: "assets/peliculas/ralph.jpg",
        plot: "Ralph, un villano de videojuegos, se cansa de su papel y busca convertirse en un héroe en otros juegos.",
        rating: 7.7
      },
      {
        titulo: "Encanto",
        director: "Jared Bush, Byron Howard",
        year: 2021,
        image: "assets/peliculas/encanto.jpg",
        plot: "La familia Madrigal vive en una casa mágica en Colombia, donde todos tienen poderes excepto Mirabel, quien intenta salvar a su familia.",
        rating: 7.6
      }
    ];
  }

  currentPelicula: any = null

  show(p: any) {
    this.currentPelicula = p
  }

  closeCard() {
    this.currentPelicula = null;
  }
}
