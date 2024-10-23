import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';



@NgModule({
  declarations: [MoviesComponent, HomeComponent, SeriesComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesComponent, HomeComponent, SeriesComponent]
})
export class PagesModule { }
