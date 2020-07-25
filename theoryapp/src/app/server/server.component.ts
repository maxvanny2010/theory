import {Component} from '@angular/core';
import {CarsService} from "./cars.service";

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  cars: Cars[] = [];
  carName: string = '';
  colors = [
    'red', 'blue', 'green', 'black'
  ];

  constructor(private carsService: CarsService) {
  }

  getGETCars() {
    return this.carsService.getCarsByGET().subscribe((cars: Cars[]) => this.cars = cars);
  }

  addPOSTCar() {
    this.carsService.addCarByPOST(this.carName)
      .subscribe((car: Cars) => {
        console.log(car);
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandomColor())
      .subscribe((data) => { console.log(data); });
  }
}
