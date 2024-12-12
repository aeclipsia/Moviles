import { Component } from '@angular/core';
import { IMensaje } from '../../interfaces/IMensaje';
import { FetchService } from '../../services/fetch.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  mensajes: IMensaje[] = [];

  constructor(private fetch: FetchService) {}

  ngOnInit() {
    this.fetch.getMensajes().subscribe((item) => {
      item.forEach((e) => {
        this.mensajes.push(e);
      });
    });
  }

  selectedmessage: string | null = null;

  showMessage(id: string) {
    this.selectedmessage = this.selectedmessage === id ? null : id;
  }
}
