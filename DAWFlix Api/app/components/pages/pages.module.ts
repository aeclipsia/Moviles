import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PeliculasComponent, HomeComponent, SeriesComponent],
  imports: [CommonModule, RouterModule],
  exports: [PeliculasComponent, HomeComponent, SeriesComponent],
})
export class PagesModule {}
