import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-input-ouput-example',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './input-ouput-example.component.html',
  styleUrl: './input-ouput-example.component.css'
})
export class InputOuputExampleComponent {

  input: boolean = false
  ouput: boolean = false
  
  // Declaracion de Input
  @Input() show: boolean = true;

  // Declaracion de Ouput
  @Output() messageEvent = new EventEmitter<string>();

  // Funcion para emitir
  emit() {
    this.messageEvent.emit('Mensaje emitido');
  }

  onInputView() {
    this.ouput = false
    this.input = !this.input
  }

  onOuputView() {
    this.ouput = !this.ouput
    this.input = false
  }
}
