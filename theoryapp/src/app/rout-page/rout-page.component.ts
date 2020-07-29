import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-rout-page',
  templateUrl: './rout-page.component.html',
})
export class RoutPageComponent implements OnInit {
  id: number;
  name: string;
  color: string;
  year: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.year = this.route.snapshot.queryParams['year'];
    this.color = this.route.snapshot.queryParams['color'];
    this.hash = this.route.snapshot.fragment;
    //listen address params. when the end unsubscribe and destroy
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.year = params['year'];
      this.color = params['color'];
    });
  }

  openMazdaPage() {
    this.router.navigate(['./cars', 8, 'Mazda'],
      {
        queryParams: {
          year: 2020,
          color: 'pink'
        },
        fragment: 'pic'
      });
  }
}
