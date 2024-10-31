import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-ticket',
  standalone: true,
  imports: [],
  templateUrl: './list-of-ticket.component.html',
  styleUrl: './list-of-ticket.component.css'
})
export class ListOfTicketComponent {
  ticketsList = [
    { id: 1, title: 'Ticket 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Ticket 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Ticket 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
  ]
}
