import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `<h1>My Name is {{name}}</h1><p>Accenture Services</p>
  // <app-employee-list></app-employee-list>`
  
})
export class AppComponent {
  title = 'Projects';
  public name = "Tanima Rakshit";
  public message = "";
}
