import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ngfor-example',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ngfor-example.component.html',
  styleUrl: './ngfor-example.component.css'
})
export class NgforExampleComponent {

  items = [
    {name:'Jose', age: '21'},
    {name:'Maria', age: '24'},
    {name:'Alberto', age: '26'},
    {name:'Michael', age: '19'},
  ]

}
