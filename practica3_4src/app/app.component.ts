import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NombresComponent } from './componentes/nombres/nombres.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NombresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}
