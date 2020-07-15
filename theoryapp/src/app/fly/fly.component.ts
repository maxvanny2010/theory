import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fly',
  templateUrl: './fly.component.html',
  styleUrls: ['./fly.component.css']
})
export class FlyComponent  {
  @Input('flyItem') fly: { name: string, year: number; }
}
