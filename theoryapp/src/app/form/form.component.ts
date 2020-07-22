import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
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
