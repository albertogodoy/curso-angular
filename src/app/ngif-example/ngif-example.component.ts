import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ngif-example',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ngif-example.component.html',
  styleUrl: './ngif-example.component.css'
})
export class NgifExampleComponent {

  isVisible: boolean = false;

}
