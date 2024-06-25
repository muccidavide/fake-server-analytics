import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
    selector: 'app-support',
    standalone: true,
    templateUrl: './support.component.html',
    styleUrl: './support.component.css',
    imports: [NewTicketComponent]
})
export class SupportComponent {

}
