import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-fly',
  templateUrl: './add-fly.component.html',
  styleUrls: ['./add-fly.component.css']
})
export class AddFlyComponent {
  flyName = '';
  flyYear = 2020;
  @Output('ListenerOuterEvent') listener = new EventEmitter<{ name: string, year: number }>();

  constructor() {
  }

  addFly() {
    this.listener.emit({
      name: this.flyName,
      year: this.flyYear
    });
    this.flyName = '';
    this.flyYear = 2020;
  }

}
