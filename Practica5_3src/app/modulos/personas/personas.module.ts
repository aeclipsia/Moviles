import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../componentes/input/input.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../../componentes/list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputComponent, ListComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [InputComponent, ListComponent],
})
export class PersonasModule {}
