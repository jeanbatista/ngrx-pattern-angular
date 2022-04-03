import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]]
    })
  }

}
