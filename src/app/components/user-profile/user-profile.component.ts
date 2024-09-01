import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function greetName(name: string){
  return "Hiii " + name;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input() name=""
  @Input({transform: booleanAttribute}) isSingle!: boolean
  @Input({transform: numberAttribute}) salary!: number
  @Input({transform: numberAttribute}) phoneno!:number
  @Output () myEvent= new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name: this.name, newSalary: 90000});
  }
}
