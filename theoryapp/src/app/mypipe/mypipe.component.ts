import {Component} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Component({
  selector: 'app-mypipe',
  template: `
    <div class="col-8 offset-2">
      <h2>{{ num }}</h2>
      <h2>{{ num | appPow:3:'=' }}</h2>
    </div>
    <div class="col-12 offset-2">
      <!--<h1>{{this.title}}</h1>-->
      <h1>{{asyncTitle | async}}</h1>
      <input type="text" class="form-control" [(ngModel)]="this.searchCar">
      <button class="btn btn-primary" (click)="addCar()">Добавить</button>
      <hr>
      <ul class="list-group">
        <li class="list-group-item"
            *ngFor="let car of cars | dynamicFilter:searchCar:'desc'; let idx = index"
        ><b>{{idx + 1}}</b>{{car.name}}{{car.desc}}</li>
      </ul>
    </div>
  `,
})
export class MypipeComponent {
  num = 2;
  searchCar = '';
  cars = [
    {name: 'Ford', desc: ' Description 1'},
    {name: 'BMW', desc: ' Description 2'},
    {name: 'Mercedes', desc: ' Description 3'},
    {name: 'Bentley', desc: ' Description 4'},
    {name: 'Audi', desc: ' Description 5'},
  ];
  /*title = '';*/
  asyncTitle = Observable.of('async delay 3 seconds')
    .delay(3000);
    /*.subscribe(str => this.title = str);*/

  addCar() {
    this.cars.push({
      name: 'NEW CAR',
      desc: 'DESC'
    });
  }
}
