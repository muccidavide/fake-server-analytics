import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { ITicket } from '../../interfaces/Ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
    selector: 'app-support',
    standalone: true,
    templateUrl: './support.component.html',
    styleUrl: './support.component.css',
    imports: [NewTicketComponent, TicketComponent]
})
export class SupportComponent {
    tickets: ITicket[] = [];

    onAdd(ticketData: { title: string, text: string }) {
        const ticket: ITicket = {
            title: ticketData.title,
            request: ticketData.text,
            id: Math.random().toString(),
            status: 'open'
        }
        this.tickets.push(ticket);
    }

    onCloseTicket(id: string) {
        this.tickets = this.tickets.map((t: ITicket) => {
            if (t.id === id) {
                return { ...t, status: 'closed' }
            }
            return t;
        })
    }

}
