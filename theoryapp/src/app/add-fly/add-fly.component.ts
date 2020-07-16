import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-fly',
  templateUrl: './add-fly.component.html',
  styleUrls: ['./add-fly.component.css']
})
export class AddFlyComponent {
  @Output('ListenerOuterEvent') listener = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('yearLocalReference') yearReference: ElementRef;

  constructor() {
  }

  addFly(flyLocalReference: HTMLInputElement) {
    this.listener.emit({
      name: flyLocalReference.value,
      year: +this.yearReference.nativeElement.value
    });
    flyLocalReference.value = '';
    this.yearReference.nativeElement.value = 2020;
  }

}
