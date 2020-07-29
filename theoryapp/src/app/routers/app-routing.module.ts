import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RouterPageComponent} from "../router-page/router-page.component";
import {RouterBasePageComponent} from "../router-base-page/router-base-page.component";
import {RoutPageComponent} from "../rout-page/rout-page.component";
import {RoutPageNotFoundComponent} from "../rout-page-not-found/rout-page-not-found.component";

const appRoutes: Routes = [
  {
    path: 'cars', component: RouterPageComponent, children: [
      {path: ':id/:name', component: RoutPageComponent}
    ]
  },
  // {path: 'cars/:id/:name', component: RoutPageComponent},
  {path: '', component: RouterBasePageComponent},
  /* {path: '**', component: RoutPageNotFoundComponent},*/
  {path: 'app-rout-page-not-found', component: RoutPageNotFoundComponent},
  {path: '**', redirectTo: '/app-rout-page-not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
