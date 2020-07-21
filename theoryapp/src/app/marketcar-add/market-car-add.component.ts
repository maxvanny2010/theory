import {Component} from '@angular/core';
import {CarService} from "../market/car.service";

@Component({
  selector: 'app-market-car-add',
  templateUrl: './market-car-add.component.html',
  styleUrls: ['./market-car-add.component.css']
})
export class MarketCarAddComponent {
  carName = '';

  constructor(private service: CarService) {
  }

  addCar() {
    this.service.addCar(this.carName);
    this.carName = '';
  }
}
