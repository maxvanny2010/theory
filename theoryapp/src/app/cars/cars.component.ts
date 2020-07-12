import {Component, OnInit} from '@angular/core';

@Component({
 // selector: 'app-cars', //level selector
 // selector: '[app-cars]', //level tag
  selector: '.app-cars', //level class
  templateUrl: './cars.component.html',
  styles: [`
    p {
      font-size: smaller;
      color: coral;
    }
  `]
})
export class CarsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
