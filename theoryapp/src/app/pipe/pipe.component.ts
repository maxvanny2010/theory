import {Component} from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
    <div class="col-xl-8 offset-2">
      <h2>{{ name}}</h2>
      <h2>{{ name | lowercase}}</h2>
      <h2>{{ name | uppercase}}</h2>
      <h2>{{ name | slice:0:3}}</h2>
      <h2>{{ name | slice:3:6 | uppercase}}</h2>
      <hr>
      <h2>{{ pi}}</h2>
      <h2>{{ pi | number}}</h2>
      <h2>{{ pi | number:'1.3-4'}}</h2>
      <h2>{{ pi | number:'2.2-2'}}</h2>
      <hr>
      <h2>{{ money | currency:'USD':false}}</h2>
      <h2>{{ money | currency:'EUR'}}</h2>
      <hr>
      <h2>{{ date }}</h2>
      <h2>{{ date | date }}</h2>
      <h2>{{ date | date:'fullDate' }}</h2>
      <h2>{{ date | date:'shortDate' }}</h2>
      <h2>{{ date | date:'shortTime' }}</h2>
      <hr>
      <h2>{{ amount}}</h2>
      <h2>{{ amount | percent }}</h2>
      <hr>
      <h2>{{ object}}</h2>
      <h2>{{ object | json}}</h2>
      <h2>
        <pre>{{ object | json }}</pre>
      </h2>
    </div>
  `
})
export class PipeComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3]
    }
  };
}
