import {Component} from '@angular/core';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent {
  truckName = '';
  truckYear = 2020;

  trucks = [{
    name: 'Ford',
    year: 2020
  }, {
    name: 'BMW',
    year: 2022
  }, {
    name: 'Mercedes',
    year: 2021
  }];

  constructor() {
  }

  addCar() {
    this.trucks.push({
      name: this.truckName,
      year:this.truckYear
    });
    this.truckName = '';
    this.truckYear = 2020;
  }
}
