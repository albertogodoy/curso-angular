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
    {id: 1, name:'Jose', age: '21'},
    {id: 2, name:'Maria', age: '24'},
    {id: 3, name:'Alberto', age: '26'},
    {id: 4, name:'Michael', age: '19'},
  ]

}
