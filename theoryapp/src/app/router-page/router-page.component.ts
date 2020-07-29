import {Component, OnInit} from '@angular/core';
import {RoutersService} from "../routers/routers.service";

@Component({
  selector: 'app-router-page',
  templateUrl: './router-page.component.html',
})
export class RouterPageComponent implements OnInit {
  cars = [];

  constructor(private  routerService: RoutersService) {
  }

  ngOnInit(): void {
    this.cars = this.routerService.cars;
  }

}
