import {Component} from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Bentley'];
  items = [{id: 3, name: 'item 1'}, {id: 6, name: 'item 2'}, {id: 6, name: 'item 3'}];
  dates = [
    new Date(2020, 1, 1).toDateString(),
    new Date(2020, 1, 2).toDateString(),
    new Date(2020, 1, 3).toDateString(),
    new Date(2020, 1, 4).toDateString(),
  ]

  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarText(car: string) {
    return car.length < 4;
  }
}
