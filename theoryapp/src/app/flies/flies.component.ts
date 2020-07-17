import {Component} from '@angular/core';

@Component({
  selector: 'app-flies',
  templateUrl: './flies.component.html',
  styleUrls: ['./flies.component.css']
})
export class FliesComponent {

  flies = [{
    name: 'Ford',
    year: 2020
  }/*, {
    name: 'BMW',
    year: 2022
  }, {
    name: 'Mercedes',
    year: 2021
  }*/];

  constructor() {
  }

  addFliesByEvent(fly: { name: string, year: number }) {
    this.flies.push(fly);
  }

  changeCarName() {
    this.flies[0].name = 'new car name';
  }

  deleteCar() {
    this.flies.splice(0, 1);
  }
}
