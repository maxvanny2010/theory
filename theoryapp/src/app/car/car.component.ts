import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
    <h2>Single car</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
  `,
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
