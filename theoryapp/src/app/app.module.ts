import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MeComponent} from "./me/me.component";
import {MiComponent} from './mi/mi.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {FormsModule} from "@angular/forms";
import {IfelseComponent} from './ifelse/ifelse.component';
import {ForComponent} from './for/for.component';
import {TrucksComponent} from './trucks/trucks.component';
import {TruckComponent} from './truck/truck.component';
import {FlyComponent} from './fly/fly.component';
import {FliesComponent} from './flies/flies.component';
import {AddFlyComponent} from './add-fly/add-fly.component';
import {MyDirectiveDirective} from './directives/my-directive.directive';
import {DirectComponent} from './direct/direct.component';
import {SwithComponent} from './swith/swith.component';
import {PipeComponent} from './pipe/pipe.component';
import {MypipeComponent} from "./mypipe/mypipe.component";
import {PowPipe} from "./mypipe/pow.pipe";
import {DynamicFilterPipe} from './mypipe/dynamicFilter.pipe';
import {MarketCarComponent} from './marketcar/market-car.component';
import {MarketCarAddComponent} from './marketcar-add/market-car-add.component';
import {MarketComponent} from './market/market.component';
import {CarService} from "./market/car.service";
import {ConsoleService} from "./market/console.service";

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
    FliesComponent,
    AddFlyComponent,
    FlyComponent,
    MyDirectiveDirective,
    DirectComponent,
    SwithComponent,
    PipeComponent,
    MypipeComponent,
    PowPipe,
    DynamicFilterPipe,
    MarketCarComponent,
    MarketCarAddComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CarService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
