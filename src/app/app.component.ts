import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';

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
    {name: "Dev", isSingle: false, salary: 85000, phoneno: 7231950617},
    {name: "Vishu", isSingle: false, salary: 95000, phoneno: 7231950617},
    {name: "Raj", isSingle: true, salary: 75000, phoneno: 7231950617}
  ]
  receivedData(e: User){
    const userIndex = this.users.findIndex((u) => {
      return u.name === e.name;
    });
  
    if (userIndex !== -1) {
      this.users[userIndex].salary = e.newSalary;
    } else {
      console.error(`User with name ${e.name} not found.`);
    }
  }
}
