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

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    MiComponent,
    CarsComponent,
    CarComponent,
    IfelseComponent,
    ForComponent
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
