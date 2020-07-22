import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl(''),
      country: new FormControl('ua'),
      answer: new FormControl('yes'),

    });
  }

  form: FormGroup;

  onSubmit() {
    console.log('Submitted!', this.form);
  }

  answers = [{
    type: 'yes',
    text: 'ДА'
  }, {
    type: 'no',
    text: 'НЕТ'
  }];

}
