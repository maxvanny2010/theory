import {Component} from '@angular/core';

@Component({
  selector: 'app-mypipe',
  template: `
    <div class="col-8 offset-2">
      <h2>{{ num }}</h2>
      <h2>{{ num | appPow:3:'=' }}</h2>
    </div>
  `,
})
export class MypipeComponent {
  num = 2;
}
