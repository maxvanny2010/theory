import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MeComponent} from "./me/me.component";
import { MiComponent } from './mi/mi.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    MiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
