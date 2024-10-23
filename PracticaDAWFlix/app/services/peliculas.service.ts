import { Injectable } from '@angular/core';
import { IPeliculas } from '../pages/peliculas/IPeliculas';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private peliculas: IPeliculas[] = [
    {
      titulo: 'Inside Out 2',
      director: 'Kelsey Mann',
      year: 2024,
      image: 'assets/peliculas/inside-out.jpg',
      imagewide: 'assets/peliculas/inside-out-wide.jpg',
      plot: 'Riley ahora es adolescente y enfrenta nuevas emociones mientras navega por su vida de secundaria.',
      sinopsiscompleto:
        'En esta secuela, Riley, ahora una adolescente, debe lidiar con las emociones complejas que surgen en la vida de secundaria. Alegría, Tristeza, Miedo, Enfado y Desagrado tienen que adaptarse a los nuevos retos que surgen en su camino hacia la adultez.',
      rating: 8.5,
    },
    {
      titulo: 'The Little Mermaid',
      director: 'Ron Clements, John Musker',
      year: 1989,
      image: 'assets/peliculas/mermaid.jpg',
      imagewide: 'assets/peliculas/mermaid-wide.jpg',
      plot: 'Ariel, una joven sirena, sueña con vivir en la superficie y enamorarse de un príncipe humano.',
      sinopsiscompleto:
        'Ariel, una intrépida sirena, se siente atrapada en el océano y anhela conocer el mundo humano. Al salvar a un príncipe de un naufragio, se enamora y hace un trato con la bruja del mar, Ursula, para convertirse en humana y tener una oportunidad de amor. Sin embargo, deberá enfrentarse a desafíos y aprender el verdadero significado del sacrificio y la identidad.',
      rating: 8.0,
    },
    {
      titulo: 'Beauty and the Beast',
      director: 'Gary Trousdale, Kirk Wise',
      year: 1991,
      image: 'assets/peliculas/beast.jpg',
      imagewide: 'assets/peliculas/beast-wide.jpg',
      plot: 'Bella se encuentra atrapada en un castillo con una bestia encantada, pero el amor verdadero puede romper la maldición.',
      sinopsiscompleto:
        'Bella, una joven inteligente y soñadora, se ofrece como prisionera a cambio de la libertad de su padre. En el castillo de la Bestia, descubre un mundo mágico lleno de encantos y secretos. A medida que se desarrollan sus sentimientos, Bella se da cuenta de que la verdadera belleza reside en el corazón.',
      rating: 8.4,
    },
    {
      titulo: 'Toy Story',
      director: 'John Lasseter',
      year: 1995,
      image: 'assets/peliculas/toy.jpg',
      imagewide: 'assets/peliculas/toy-wide.jpg',
      plot: 'Los juguetes de Andy cobran vida cuando no hay humanos cerca, liderados por Woody y Buzz Lightyear.',
      sinopsiscompleto:
        'En un mundo donde los juguetes cobran vida cuando no hay humanos, Woody, un vaquero, es el juguete favorito de Andy. Sin embargo, la llegada de Buzz Lightyear, un nuevo y sofisticado juguete, provoca celos y conflictos. A través de aventuras y desafíos, Woody y Buzz aprenden sobre la amistad y la lealtad.',
      rating: 8.3,
    },
    {
      titulo: 'Monsters, Inc.',
      director: 'Pete Docter, David Silverman, Lee Unkrich',
      year: 2001,
      image: 'assets/peliculas/monsters.jpg',
      imagewide: 'assets/peliculas/monsters-wide.jpg',
      plot: 'Dos monstruos descubren que asustar niños no es tan fácil cuando una niña entra en su mundo.',
      sinopsiscompleto:
        'En Monstruópolis, los monstruos obtienen su energía asustando a los niños. Sulley y Mike, los mejores asustadores, se ven envueltos en una aventura inesperada cuando una niña llamada Boo se escapa a su mundo. Juntos deben encontrar la manera de devolverla a casa y descubrir que la risa es más poderosa que el miedo.',
      rating: 8.1,
    },
    {
      titulo: 'Mulan',
      director: 'Tony Bancroft, Barry Cook',
      year: 1998,
      image: 'assets/peliculas/mulan.jpg',
      imagewide: 'assets/peliculas/mulan-wide.jpg',
      plot: 'Mulan toma el lugar de su padre en el ejército chino para salvar su honor y proteger a su país.',
      sinopsiscompleto:
        'Cuando el imperio chino es amenazado por los hunos, Mulan se disfraza de hombre para unirse al ejército en lugar de su padre enfermo. A lo largo de su viaje, debe enfrentar desafíos y descubrir su verdadero potencial, mientras demuestra que el valor y la fuerza no dependen del género.',
      rating: 7.8,
    },
    {
      titulo: 'Aladdin',
      director: 'Ron Clements, John Musker',
      year: 1992,
      image: 'assets/peliculas/aladdin.jpg',
      imagewide: 'assets/peliculas/aladdin-wide.jpg',
      plot: 'Aladdin encuentra una lámpara mágica que le concede deseos mientras trata de ganar el corazón de la princesa Jasmine.',
      sinopsiscompleto:
        'Aladdin, un joven ladrón de la ciudad de Agrabah, descubre una lámpara mágica que contiene un genio. Con la ayuda del genio, Aladdin busca ganar el corazón de la princesa Jasmine, enfrentándose a desafíos y descubriendo su verdadero yo en el camino.',
      rating: 8.0,
    },
    {
      titulo: 'Frozen',
      director: 'Chris Buck, Jennifer Lee',
      year: 2013,
      image: 'assets/peliculas/frozen.jpg',
      imagewide: 'assets/peliculas/frozen-wide.jpg',
      plot: 'Anna se embarca en una aventura para encontrar a su hermana Elsa, cuyos poderes de hielo han atrapado su reino en invierno eterno.',
      sinopsiscompleto:
        'Cuando la reina Elsa accidentalmente sumerge a Arendelle en un invierno eterno, su hermana Anna se embarca en una misión para encontrarla y poner fin a la helada. Acompañada por un montañés, una reno y un muñeco de nieve, Anna aprende sobre el poder del amor verdadero y la familia.',
      rating: 7.5,
    },
    {
      titulo: 'The Lion King',
      director: 'Roger Allers, Rob Minkoff',
      year: 1994,
      image: 'assets/peliculas/lion.jpg',
      imagewide: 'assets/peliculas/lion-wide.jpg',
      plot: 'Simba, un joven león, debe reclamar su lugar como rey tras la traición de su tío Scar.',
      sinopsiscompleto:
        'Tras la muerte de su padre, Simba, un joven león, se ve obligado a huir de su hogar. Creciendo lejos de su reino, aprende importantes lecciones sobre la vida y la responsabilidad. Con la ayuda de sus amigos, Simba debe enfrentar a su temible tío Scar y reclamar su lugar como rey.',
      rating: 8.5,
    },
    {
      titulo: 'Coco',
      director: 'Lee Unkrich, Adrian Molina',
      year: 2017,
      image: 'assets/peliculas/coco.jpg',
      imagewide: 'assets/peliculas/coco-wide.jpg',
      plot: 'Miguel, un joven aspirante a músico, se adentra en el Mundo de los Muertos para descubrir el misterio de su familia.',
      sinopsiscompleto:
        'Miguel, un joven apasionado por la música, se encuentra en el Día de los Muertos en el Mundo de los Muertos, donde descubre secretos familiares. Acompañado por el encantador Héctor, Miguel busca desentrañar la verdad sobre su familia y el amor por la música que lo une a ellos.',
      rating: 8.4,
    },
    {
      titulo: 'Finding Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      image: 'assets/peliculas/nemo.jpg',
      imagewide: 'assets/peliculas/nemo-wide.jpg',
      plot: 'Un pez payaso llamado Marlin emprende un viaje para rescatar a su hijo Nemo, quien ha sido capturado por un buzo.',
      sinopsiscompleto:
        'Marlin, un sobreprotector pez payaso, se embarca en una peligrosa aventura a través del océano para rescatar a su hijo Nemo, que ha sido capturado por un buzo. Con la ayuda de Dory, una pez con problemas de memoria, Marlin aprende sobre la valentía, la amistad y la importancia de dejar ir.',
      rating: 8.1,
    },
    {
      titulo: 'Ratatouille',
      director: 'Brad Bird, Jan Pinkava',
      year: 2007,
      image: 'assets/peliculas/rat.jpg',
      imagewide: 'assets/peliculas/rat-wide.jpg',
      plot: 'Remy, una rata con un don para la cocina, persigue su sueño de ser chef en un famoso restaurante parisino.',
      sinopsiscompleto:
        'Remy, una rata con un talento excepcional para la cocina, forma un inusual vínculo con un joven limpiador en un restaurante de París. Juntos, desafían las expectativas y los prejuicios del mundo culinario mientras luchan por lograr el sueño de Remy de convertirse en chef.',
      rating: 8.0,
    },
    {
      titulo: 'Moana',
      director: 'Ron Clements, John Musker',
      year: 2016,
      image: 'assets/peliculas/moana.jpg',
      imagewide: 'assets/peliculas/moana-wide.jpg',
      plot: 'Moana, la hija de un jefe polinesio, se embarca en una peligrosa travesía para salvar a su pueblo con la ayuda del semidiós Maui.',
      sinopsiscompleto:
        'Moana, una valiente joven polinesia, se embarca en un viaje épico a través del océano para salvar a su pueblo. Acompañada por el semidiós Maui, Moana debe enfrentar desafíos y descubrir su propio destino mientras aprende sobre el poder de la tradición y la conexión con sus ancestros.',
      rating: 7.6,
    },
    {
      titulo: 'Up',
      director: 'Pete Docter',
      year: 2009,
      image: 'assets/peliculas/up.jpg',
      imagewide: 'assets/peliculas/up-wide.jpg',
      plot: 'Carl Fredricksen, un anciano viudo, viaja a Sudamérica en su casa flotante, acompañado por un joven explorador llamado Russell.',
      sinopsiscompleto:
        'Carl, un anciano viudo, cumple su sueño de aventura volando a Sudamérica en su casa flotante. Sin embargo, se ve acompañado por Russell, un joven explorador. A través de su viaje, ambos descubren la importancia de la amistad y la conexión emocional, enfrentándose a sus propios miedos y pérdidas.',
      rating: 8.2,
    },
    {
      titulo: 'Brave',
      director: 'Mark Andrews, Brenda Chapman',
      year: 2012,
      image: 'assets/peliculas/brave.jpg',
      imagewide: 'assets/peliculas/brave-wide.jpg',
      plot: 'Mérida, una princesa escocesa, desafía las tradiciones familiares mientras lucha por controlar su propio destino.',
      sinopsiscompleto:
        'Mérida, una valiente princesa escocesa, desafía las normas y tradiciones familiares cuando se niega a aceptar un matrimonio arreglado. En su búsqueda de libertad, termina en una aventura mágica que pone a prueba su valor y la relación con su madre, llevándola a aprender sobre el verdadero significado de la valentía.',
      rating: 7.1,
    },
    {
      titulo: 'The Incredibles',
      director: 'Brad Bird',
      year: 2004,
      image: 'assets/peliculas/incredibles.jpg',
      imagewide: 'assets/peliculas/incredibles-wide.jpg',
      plot: 'Una familia de superhéroes trata de vivir una vida normal hasta que deben volver a la acción para salvar el mundo.',
      sinopsiscompleto:
        'Los Parr son una familia de superhéroes que se ven obligados a llevar vidas normales tras la prohibición de la superheroína. Sin embargo, cuando un nuevo villano amenaza al mundo, deben unir fuerzas y redescubrir sus poderes para salvar el día y aceptar su verdadera identidad.',
      rating: 8.0,
    },
    {
      titulo: 'Tangled',
      director: 'Nathan Greno, Byron Howard',
      year: 2010,
      image: 'assets/peliculas/tangled.jpg',
      imagewide: 'assets/peliculas/tangled-wide.jpg',
      plot: 'Rapunzel, una joven con un largo cabello mágico, escapa de su torre con la ayuda de un ladrón encantador.',
      sinopsiscompleto:
        'Rapunzel, una joven con un largo cabello mágico, ha vivido toda su vida en una torre. Cuando un ladrón encantador entra en su vida, decide escapar y descubrir el mundo exterior. Juntos, se embarcan en una aventura que cambia sus vidas, enfrentando peligros y descubriendo el verdadero amor.',
      rating: 7.7,
    },
    {
      titulo: 'The Jungle Book',
      director: 'Wolfgang Reitherman',
      year: 1967,
      image: 'assets/peliculas/mowgli.jpg',
      imagewide: 'assets/peliculas/mowgli-wide.jpg',
      plot: 'Mowgli, un niño criado por lobos, navega por la selva mientras es perseguido por el temible tigre Shere Khan.',
      sinopsiscompleto:
        'Mowgli, un niño humano criado por lobos, vive en la selva y debe aprender a sobrevivir. A medida que se enfrenta al peligro del tigre Shere Khan, Mowgli descubre su identidad y la importancia de la amistad, la familia y el respeto hacia la naturaleza.',
      rating: 7.6,
    },
    {
      titulo: 'Lilo & Stitch',
      director: 'Chris Sanders, Dean DeBlois',
      year: 2002,
      image: 'assets/peliculas/lilo.jpg',
      imagewide: 'assets/peliculas/lilo-wide.jpg',
      plot: 'Lilo, una niña hawaiana, adopta a Stitch, un extraterrestre travieso que está huyendo de las autoridades galácticas.',
      sinopsiscompleto:
        'Lilo, una niña hawaiana solitaria, adopta a Stitch, un experimento genético que escapa de las autoridades galácticas. A medida que Lilo y Stitch desarrollan un vínculo especial, aprenden sobre la importancia de la familia, la amistad y la aceptación.',
      rating: 7.3,
    },
    {
      titulo: 'Zootopia',
      director: 'Byron Howard, Rich Moore',
      year: 2016,
      image: 'assets/peliculas/zootopia.jpg',
      imagewide: 'assets/peliculas/zootopia-wide.jpg',
      plot: 'En una ciudad habitada por animales, una coneja policía y un zorro estafador unen fuerzas para resolver una misteriosa desaparición.',
      sinopsiscompleto:
        'En la vibrante ciudad de Zootopia, Judy Hopps, la primera coneja policía, se une al astuto zorro Nick Wilde para resolver un caso de desaparición. Juntos, desafían los prejuicios y descubren una conspiración que pone en peligro a todos los animales, aprendiendo sobre la amistad y la diversidad.',
      rating: 8.0,
    },
    {
      titulo: 'The Princess and the Frog',
      director: 'Ron Clements, John Musker',
      year: 2009,
      image: 'assets/peliculas/frog.jpg',
      imagewide: 'assets/peliculas/frog-wide.jpg',
      plot: 'Tiana, una camarera de Nueva Orleans, sueña con abrir un restaurante, pero se ve envuelta en un encantamiento.',
      sinopsiscompleto:
        'Tiana, una joven que trabaja arduamente como camarera en Nueva Orleans, sueña con abrir su propio restaurante. Cuando se encuentra con un príncipe que ha sido transformado en rana, se embarca en una aventura mágica que la lleva a descubrir el valor de los sueños y el amor verdadero.',
      rating: 7.1,
    },
    {
      titulo: 'Frozen II',
      director: 'Chris Buck, Jennifer Lee',
      year: 2019,
      image: 'assets/peliculas/frozen2.jpg',
      imagewide: 'assets/peliculas/frozen2-wide.jpg',
      plot: 'Anna, Elsa, Kristoff y Olaf se embarcan en una nueva aventura para descubrir el origen de los poderes de Elsa.',
      sinopsiscompleto:
        'Anna, Elsa, Kristoff y Olaf se embarcan en un viaje hacia el norte para descubrir la verdad sobre el pasado de Elsa y los orígenes de sus poderes. En su travesía, deben enfrentar nuevos desafíos y desvelar secretos familiares que cambiarán sus vidas para siempre.',
      rating: 6.9,
    },
    {
      titulo: 'Wreck-It Ralph',
      director: 'Rich Moore',
      year: 2012,
      image: 'assets/peliculas/ralph.jpg',
      imagewide: 'assets/peliculas/ralph-wide.jpg',
      plot: 'Ralph, un villano de videojuegos, se cansa de su papel y busca convertirse en un héroe en otros juegos.',
      sinopsiscompleto:
        'Ralph, un villano de videojuegos, está cansado de ser el malo en su juego. Decide aventurarse a otros videojuegos en busca de reconocimiento y aceptación. A través de su viaje, Ralph descubre el valor de la amistad, la redención y lo que realmente significa ser un héroe.',
      rating: 7.7,
    },
    {
      titulo: 'Encanto',
      director: 'Jared Bush, Byron Howard',
      year: 2021,
      image: 'assets/peliculas/encanto.jpg',
      imagewide: 'assets/peliculas/encanto-wide.jpg',
      plot: 'La familia Madrigal vive en una casa mágica en Colombia, donde todos tienen poderes excepto Mirabel, quien intenta salvar a su familia.',
      sinopsiscompleto:
        'En una colorida comunidad en Colombia, la familia Madrigal vive en una casa mágica donde cada miembro tiene un don especial, excepto Mirabel. Cuando la magia comienza a desvanecerse, Mirabel debe descubrir su propio poder y encontrar la manera de salvar a su familia y su hogar.',
      rating: 7.6,
    },
  ];

  getCatalogo(): IPeliculas[] {
    return this.peliculas;
  }

  getPelicula(i: number): IPeliculas | undefined {
    return this.peliculas[i];
  }
}
