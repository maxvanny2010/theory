import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-router-base-page',
  templateUrl: './router-base-page.component.html',
})
export class RouterBasePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  openAbsoluteRouterPage() {
    this.router.navigate(['/cars']);
  }

  openRelativeRouterPage() {
    this.router.navigate(['cars'], {relativeTo: this.route});
  }
}
