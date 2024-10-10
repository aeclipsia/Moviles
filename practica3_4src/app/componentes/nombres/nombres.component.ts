import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nombres',
  standalone: false,
  templateUrl: './nombres.component.html',
  styleUrl: './nombres.component.css'
})

export class NombresComponent {
  list:string [] = [];
  
  input_nombre:string="";

  addPersona() {
    if(this.input_nombre.trim()){
      this.list.push(this.input_nombre);
    }
    this.resetInput();
  }
  
  removePersona(){
    let x = this.list.indexOf(this.input_nombre)
    if(x!=-1){
      this.list.splice(x,1)
    }
    this.resetInput();
  }

  resetInput(){
    this.input_nombre="";
  }
}