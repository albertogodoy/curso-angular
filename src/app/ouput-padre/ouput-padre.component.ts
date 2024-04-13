import { Component } from '@angular/core';
import { InputOuputExampleComponent } from '../input-ouput-example/input-ouput-example.component';

@Component({
  selector: 'app-ouput-padre',
  standalone: true,
  imports: [InputOuputExampleComponent],
  templateUrl: './ouput-padre.component.html',
  styleUrl: './ouput-padre.component.css'
})
export class OuputPadreComponent {
  receivedMessage!: string;

  onReceivedMessage(message: string) {
    if (message) {
      this.receivedMessage = message;
    }
  }

}
