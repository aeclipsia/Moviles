import { Component } from '@angular/core';
import { PaginaModule } from './componentes/pagina.module';
import { ComponentesModule } from './componentes/componentes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaginaModule, ComponentesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RickMorty';
}
