import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name= "Dev Raj"
  age=23
  salary=50000
  isBtnDisabled= false
  inputVal="Default input"
  users = [
    {name: "Dev Raj", age: 23, sex: "Male"},{name: "Sahil", age: 19, sex: "Male"},{name: "Vishu", age: 20, sex: "Female"}
  ];
  onChange(e: Event){
    const value= (e.target as HTMLInputElement).value;
    console.log(value);
    this.inputVal= value
  }
}
