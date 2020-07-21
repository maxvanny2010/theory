import {Component, Input} from '@angular/core';
import {ConsoleService} from "../market/console.service";

@Component({
  selector: 'app-market-car',
  templateUrl: './market-car.component.html',
  styleUrls: ['./market-car.component.css'],
  providers: [ConsoleService]
})
export class MarketCarComponent {
  @Input() car;

  constructor(private service: ConsoleService) {
  }

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy';
    this.service.log(`${this.car.name} status = ${type}`)
  }
}
