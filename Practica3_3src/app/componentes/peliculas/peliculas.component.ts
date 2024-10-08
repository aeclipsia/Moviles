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
        image: "https://pics.filmaffinity.com/Del_revaes_2_Inside_Out_2-365634749-large.jpg"
      },
      {
        titulo: "The Little Mermaid",
        director: "Ron Clements, John Musker",
        year: 1989,
        image: "https://image.tmdb.org/t/p/original/8qddUnMT7CgIISEpZi7VCAwDiei.jpg"
      },
      {
        titulo: "Beauty and the Beast",
        director: "Gary Trousdale, Kirk Wise",
        year: 1991,
        image: "https://image.tmdb.org/t/p/original/dV8LE50G5h1Ko2B4ZoeCdmtuIoB.jpg"
      },
      {
        titulo: "Toy Story",
        director: "John Lasseter",
        year: 1995,
        image: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/n0IAAOSw7JFiYepX/$_57.JPG?set_id=880000500F"
      },
      {
        titulo: "Monsters, Inc.",
        director: "Pete Docter, David Silverman, Lee Unkrich",
        year: 2001,
        image: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/KP0AAOSwFqNjN2db/$_57.JPG?set_id=880000500F"
      },
      {
        titulo: "Mulan",
        director: "Tony Bancroft, Barry Cook",
        year: 1998,
        image: "https://image.tmdb.org/t/p/original/cHyYeBxh23fSmbCPIB8RGYwM7QC.jpg"
      },
      {
        titulo: "Aladdin",
        director: "Ron Clements, John Musker",
        year: 1992,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nK5WctIEXgToIDyzhkjCHG2wJVA.jpg"
      },
      {
        titulo: "Frozen",
        director: "Chris Buck, Jennifer Lee",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/itAKcobTYGpYT8Phwjd8c9hleTo.jpg"
      },
      {
        titulo: "The Lion King",
        director: "Roger Allers, Rob Minkoff",
        year: 1994,
        image: "https://image.tmdb.org/t/p/original/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
      },
      {
        titulo: "Coco",
        director: "Lee Unkrich, Adrian Molina",
        year: 2017,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
      },
      {
        titulo: "Finding Nemo",
        director: "Andrew Stanton",
        year: 2003,
        image: "https://image.tmdb.org/t/p/original/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg"
      },
      {
        titulo: "Ratatouille",
        director: "Brad Bird, Jan Pinkava",
        year: 2007,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg"
      },
      {
        titulo: "Moana",
        director: "Ron Clements, John Musker",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg"
      },
      {
        titulo: "Up",
        director: "Pete Docter",
        year: 2009,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg"
      },
      {
        titulo: "Brave",
        director: "Mark Andrews, Brenda Chapman",
        year: 2012,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/clqpQ8cds6hwsCmPUVfARJYoPX0.jpg"
      },
      {
        titulo: "The Incredibles",
        director: "Brad Bird",
        year: 2004,
        image: "https://image.tmdb.org/t/p/original/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg"
      },
      {
        titulo: "Tangled",
        director: "Nathan Greno, Byron Howard",
        year: 2010,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ym7Kst6a4uodryxqbGOxmewF235.jpg"
      },
      {
        titulo: "The Jungle Book",
        director: "Wolfgang Reitherman",
        year: 1967,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9BgcTVV43dZ8A1TpuXWkuNTXtfI.jpg"
      },
      {
        titulo: "Lilo & Stitch",
        director: "Chris Sanders, Dean DeBlois",
        year: 2002,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/m13Vbzv7R2GMAl3GXFrkmMEgCFQ.jpg"
      },
      {
        titulo: "Zootopia",
        director: "Byron Howard, Rich Moore",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg"
      },
      {
        titulo: "The Princess and the Frog",
        director: "Ron Clements, John Musker",
        year: 2009,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v6nAUs62OJ4DXmnnmPFeVmMz8H9.jpg"
      },
      {
        titulo: "Frozen II",
        director: "Chris Buck, Jennifer Lee",
        year: 2019,
        image: "https://image.tmdb.org/t/p/original/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg"
      },
      {
        titulo: "Wreck-It Ralph",
        director: "Rich Moore",
        year: 2012,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zWoIgZ7mgmPkaZjG0102BSKFIqQ.jpg"
      },
      {
        titulo: "Encanto",
        director: "Jared Bush, Byron Howard",
        year: 2021,
        image: "https://image.tmdb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg"
      }
    ];    
  }
}
