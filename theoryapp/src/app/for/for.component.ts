import {Component} from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW'];
  items = [{id: 3, name: 'item 1'}, {id: 6, name: 'item 2'}, {id: 6, name: 'item 3'}];

  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
