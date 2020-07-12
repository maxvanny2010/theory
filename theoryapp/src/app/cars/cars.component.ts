import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[app-cars]',
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
