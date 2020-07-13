import {Component} from '@angular/core';

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
export class CarsComponent {
  addCarStatus = '';
  inputText = '';

  constructor() {
  }

  onKeyUps(value: string) {
    return this.inputText = value;
  }

  onKeyUp($event: Event) {
    /*console.log($event);*/
    this.inputText = (<HTMLInputElement>$event.target).value;
  }

  addCar() {
    return this.addCarStatus = 'Машина добавлена';
  }

  /*canAddCar = false;
   constructor() {
     setTimeout(() => {
       this.canAddCar = true;
     }, 4000);
   }*/
  onKeyUpEnter(event) {
    if (event.keyKode === 'Enter') {
      this.inputText = event.target.value;
    }
  }
}
