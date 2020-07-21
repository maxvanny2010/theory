import {Component} from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  cars = [
    {name: 'BMW', isSold: false},
    {name: 'Ford', isSold: true},
    {name: 'Mercedes', isSold: false}
  ];

  addCarToList(carName: string) {
    this.cars.push({name: carName, isSold: false});
  }
}
