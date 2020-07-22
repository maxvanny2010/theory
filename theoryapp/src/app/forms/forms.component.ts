import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;

  onSubmit() {
    console.log('Submitted!', this.form);
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required),
      country: new FormControl('ua'),
      answer: new FormControl('yes'),

    });
  }

  answers = [{
    type: 'yes',
    text: 'ДА'
  }, {
    type: 'no',
    text: 'НЕТ'
  }];

}
