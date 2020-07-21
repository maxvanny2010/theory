import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-market-car-add',
  templateUrl: './market-car-add.component.html',
  styleUrls: ['./market-car-add.component.css']
})
export class MarketCarAddComponent {
  @Output() onCarAdd = new EventEmitter<String>();
  carName = '';

  addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName = '';
  }
}
