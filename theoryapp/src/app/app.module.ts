import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MeComponent} from "./me/me.component";
import { MiComponent } from './mi/mi.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from "@angular/forms";
import { IfelseComponent } from './ifelse/ifelse.component';
import { ForComponent } from './for/for.component';
import { TrucksComponent } from './trucks/trucks.component';
import { TruckComponent } from './truck/truck.component';
import { FlyComponent } from './fly/fly.component';
import { FliesComponent } from './flies/flies.component';
import { AddFlyComponent } from './add-fly/add-fly.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    MiComponent,
    CarsComponent,
    CarComponent,
    IfelseComponent,
    ForComponent,
    TrucksComponent,
    TruckComponent,
    FlyComponent,
    FliesComponent,
    AddFlyComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
