import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  numberAttribute,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function greetName(name: string) {
  return 'Hiii ' + name;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() name = '';
  @Input({ transform: booleanAttribute }) isSingle!: boolean;
  @Input({ transform: numberAttribute }) salary!: number;
  @Input({ transform: numberAttribute }) phoneno!: number;
  @Output() myEvent = new EventEmitter<User>();
  sendData() {
    this.myEvent.emit({ name: this.name, newSalary: 90000 });
  }
  @ViewChild("myHeading") heading?:ElementRef
  constructor() {
    //init properties
    //dependency injection
    //event listener
    console.log('Constructor Called ', this.name);
  }
  ngAfterViewInit(): void {
    console.log(this.heading?.nativeElement.innerHTML); 
  }
  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges called', changes);
  }
  ngOnInit() {
    console.log('NgOnIt called ', this.name);
  }
  ngOnDestroy() {
    //Unregister event listener
    //It's a good place to do some clean up things.
    console.log('Component destroyed');
  }
}
