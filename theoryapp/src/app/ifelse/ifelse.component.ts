import {Component} from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent {
  addCarStatus = false;
  carName = '';

  constructor() {
  }

  setCarStatus() {
    return this.addCarStatus = true;
  }
}
