import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent {
    //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
    private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); 
    onSubmit(title: string, text:string){
        console.log(title, text);
        this.form().nativeElement.reset();
        
    }
}
