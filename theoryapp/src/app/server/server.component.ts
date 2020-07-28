import {Component, OnInit} from '@angular/core';
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
export class ServerComponent implements OnInit {
  cars: Cars[] = [];
  carName: string = '';
  colors = [
    'red', 'blue', 'green', 'black'
  ];
  appTitle;

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
  }

  getGETCars() {
    return this.carsService.getCarsByGET().subscribe(
      (cars: Cars[]) => {
        this.cars = cars
      }, error => alert(error));
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
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteCar(car: Cars) {
    this.carsService.deleteCar(car).subscribe(data => {
      this.cars = this.cars.filter(cr => cr.id !== car.id);
    });
  }
}
