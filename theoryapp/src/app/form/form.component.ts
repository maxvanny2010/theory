import {Component, ViewChild} from '@angular/core';
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


  @ViewChild('form') form: NgForm;
  formData = {};
  isSubmitted = false;

  addRandomEmail() {
    const randEmail = 'wfm@random.com';
    this.form.form.patchValue({
      user: {email: randEmail}
    });
  }

  submitForm() {
    console.log('Submitted!', this.form);
    this.isSubmitted = true;
    this.formData = this.form.value;
    this.form.reset();
  }

}
