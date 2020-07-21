export class CarService {
  cars = [
    {name: 'BMW', isSold: false},
    {name: 'Ford', isSold: true},
    {name: 'Mercedes', isSold: false}
  ];

  addCar(name: string) {
    this.cars.push({isSold: false, name});
  }
}
