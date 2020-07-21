import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-market-car',
  templateUrl: './market-car.component.html',
  styleUrls: ['./market-car.component.css']
})
export class MarketCarComponent {
  @Input() car;

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy';
  }
}
