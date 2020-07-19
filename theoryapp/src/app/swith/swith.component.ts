import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-swith',
  templateUrl: './swith.component.html',
  styleUrls: ['./swith.component.css']
})
export class SwithComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(number: number) {
    this.current = number;
  }
}
