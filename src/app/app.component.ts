import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  // template : `<h1> Dev here ..</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';
  users= [
    {name: "Dev", isSingle: false, salary: 85000},
    {name: "Vishu", isSingle: false, salary: 95000},
    {name: "Raj", isSingle: true, salary: 75000}
  ]
  receivedData(e: string){
    console.log(e);
  }
}
