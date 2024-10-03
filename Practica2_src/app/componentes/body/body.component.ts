import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  titulo:string="titulo";
  mensaje:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi, quia ducimus suscipit nostrum fugiat consectetur nobis. Modi aliquam quidem inventore quo, amet aliquid magnam debitis fugiat, voluptatem reprehenderit consequuntur?";
}
