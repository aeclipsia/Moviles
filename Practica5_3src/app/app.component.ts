import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonasModule } from './modulos/personas/personas.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PersonasModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ejemplo_1';
}
