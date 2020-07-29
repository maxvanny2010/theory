import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../routers/auth.service";

@Component({
  selector: 'app-router-base-page',
  templateUrl: './router-base-page.component.html',
})
export class RouterBasePageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  openAbsoluteRouterPage() {
    this.router.navigate(['/cars']);
  }

  openRelativeRouterPage() {
    this.router.navigate(['cars'], {relativeTo: this.route});
  }

  changeAuthStatus(status: string) {
    status === 'login' ? this.auth.logIn() : this.auth.logOut();
  }
}
