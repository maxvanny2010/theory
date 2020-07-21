import {Component, OnInit} from '@angular/core';
import {CarService} from "./car.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  cars = [];

  constructor(private service: CarService) {
  }

  ngOnInit(): void {
    this.cars = this.service.cars;
  }
}
