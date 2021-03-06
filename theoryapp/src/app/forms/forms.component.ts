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
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
      }),
      country: new FormControl('ua'),
      answer: new FormControl('yes'),

    });
  }

  charsCount = 5;

  checkForLength(control: FormControl) {
    return control.value.length <= this.charsCount ? {'lengthError': true} : null;
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          "test@gmail.com" === control.value ? resolve({'emailIsUsed': true}) : resolve(null);
        }, 2000);
      }
    );
  }

  answers = [{
    type: 'yes',
    text: 'ДА'
  }, {
    type: 'no',
    text: 'НЕТ'
  }];

}
