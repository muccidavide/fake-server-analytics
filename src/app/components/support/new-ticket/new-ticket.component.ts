import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { ControlComponent } from "../../shared/button/control/control.component";
import { ButtonComponent } from '../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent {
    @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
    //private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); 
    @Output() add = new EventEmitter<{ title: string, request: string }>
    title: string = '';
    request: string = '';


    onSubmit() {
        this.add.emit({ title: this.title, request: this.request })
        this.title = '';
        this.request = '';

    }
}
