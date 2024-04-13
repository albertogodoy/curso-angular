import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ngswicth-example',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ngswicth-example.component.html',
  styleUrl: './ngswicth-example.component.css'
})
export class NgswicthExampleComponent {

  condition!: string;
}
