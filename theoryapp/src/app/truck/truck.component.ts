import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent {
  @Input('truckItem') truck: { name: string, year: number; }
  private truckItem = false;

  constructor() {
  }


}
