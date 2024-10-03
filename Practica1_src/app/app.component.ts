import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsignaturasComponent } from './paginas/asignaturas/asignaturas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsignaturasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica 1';
}
