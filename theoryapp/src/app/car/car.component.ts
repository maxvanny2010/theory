import {Component} from '@angular/core';

@Component({
  selector: 'app-car',
  /* template: `
     <h2>Single car</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
   `,*/
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  carName = 'Ford';
  carYear = 2021;

  getName() {
    return this.carName;
  }
}
