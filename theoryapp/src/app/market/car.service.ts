import {ConsoleService} from "./console.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CarService {

  constructor(private consoleService: ConsoleService) {
  }

  cars = [
    {name: 'BMW', isSold: false},
    {name: 'Ford', isSold: true},
    {name: 'Mercedes', isSold: false}
  ];

  addCar(name: string) {
    this.cars.push({isSold: false, name});
    this.consoleService.log(`Машина ${name} добавлена!`);
  }
}
