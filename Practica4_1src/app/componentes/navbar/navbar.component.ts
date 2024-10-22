import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ILinks } from './ILinks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  objetos:ILinks[]=[]

  constructor(){
    this.objetos=[
      {
        link_name:"Inicio",
        link_route:"/"
      },
      {
        link_name:"Series",
        link_route:"/series"
      },
      {
        link_name:"Películas",
        link_route:"/pelis"
      }
    ]
  }
}
