import { Routes } from '@angular/router';
import { ListComponent } from './componentes/list/list.component';
import { InputComponent } from './componentes/input/input.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'input', component: InputComponent },
];
