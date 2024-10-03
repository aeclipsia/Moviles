import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NotaComponent } from './nota/nota.component';



@NgModule({
  declarations: [NotaComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NotaComponent
  ]
})
export class ComponentesModule {  }
