import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

function greetName(name: string){
  return "Hiii " + name;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input({transform : greetName}) name=""
  @Input({transform: booleanAttribute}) isSingle!: boolean
  @Input({transform: numberAttribute}) salary!: number
  @Output () myEvent= new EventEmitter<string>()
  sendData(){
    this.myEvent.emit("Coders never quit");
  }
}
