import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
  input.ng-invalid.ng-touched {
  border: 1px solid red;
  }`]
})
export class FormComponent {
  defaultCountry = 'ua';
  defaultAnswer = 'yes';
  answers = [{
    type: 'yes',
    text: 'ДА'
  }, {
    type: 'no',
    text: 'НЕТ'
  }];

  submitForm(form: NgForm) {
    console.log('Submitted!', form);
  }
}
