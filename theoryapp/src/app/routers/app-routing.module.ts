import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RouterPageComponent} from "../router-page/router-page.component";
import {RouterBasePageComponent} from "../router-base-page/router-base-page.component";
import {RoutPageComponent} from "../rout-page/rout-page.component";

const appRoutes: Routes = [
  {path: 'cars', component: RouterPageComponent},
  {path: 'cars/:id/:name', component: RoutPageComponent},
  {path: '', component: RouterBasePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
