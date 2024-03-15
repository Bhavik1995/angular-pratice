import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

 @Input() all: number = 0;
 @Input() male: number = 0;
 @Input() female: number = 0;

 selectedRadioButton: string = 'All';

 @Output()
 filterButtonChange: EventEmitter<string> = new EventEmitter<string>();

 onRadioButton(){
    this.filterButtonChange.emit(this.selectedRadioButton);
 }

}
