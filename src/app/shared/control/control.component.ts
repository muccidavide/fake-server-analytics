import { Component, ContentChild, ElementRef, Input, ViewEncapsulation, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>();
  private element = inject(ElementRef);
  // non children perchè è un solo tipo di elemento passato non piu input o piu textarea
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  onClick(){
    console.log("click");
    // verra selezionato l'elemento clickato: input o textarea.
    console.log(this.control);
    
    
  }
}
