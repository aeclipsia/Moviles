import { Component } from '@angular/core';
import { IAVisualService } from '../../../services/iavisual.service';
import { IMedia } from '../../../interfaces/IMedia';

@Component({
  selector: 'app-series',
  standalone: false,
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  list: IMedia[] = [];

  constructor(private series: IAVisualService) {}

  ngOnInit() {
    this.series.getSeries().subscribe((item) => {
      item.forEach((e) => this.list.push(e));
    });
  }
}
