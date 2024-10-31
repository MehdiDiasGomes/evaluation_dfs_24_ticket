import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.css',
})
export class CreateTicketComponent {
  http = inject(HttpClient);

  ticketData = {
    created_by: '',
    description: '',
    priorite: '',
    // assigne: '',
  };

  createTicket() {
    this.http
      .post('http://localhost:3000/createticket', this.ticketData)
      .subscribe(() => {
        this.ticketData = {
          created_by: '',
          description: '',
          priorite: '',
          // assigne: '',
        };
      });
  }
}
