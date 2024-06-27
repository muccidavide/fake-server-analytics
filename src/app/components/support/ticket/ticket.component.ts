import { Component, input, output, signal } from '@angular/core';
import { ITicket } from '../../../interfaces/Ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<ITicket>();
  detailsVisable = signal(false);
  close = output();

  onToggleDetails(){
    //this.detailsVisable.set(!this.detailsVisable());
    this.detailsVisable.update((value) => !value);
  }

  onMarkAsCompleted() {
    this.close.emit();
}

}
