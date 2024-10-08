import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nombres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nombres.component.html',
  styleUrl: './nombres.component.css'
})

export class NombresComponent {
  list:string [] = [];
  
  input_nombre:string="";

  addPersona() {
    if(this.input_nombre.trim()){
      this.list.push(this.input_nombre);
      this.input_nombre="";
    }
  }
}