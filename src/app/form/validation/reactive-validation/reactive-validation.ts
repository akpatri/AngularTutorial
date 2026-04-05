import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { unambigiousRoleValidator } from '../validator';

@Component({
  selector: 'app-reactive-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-validation.html',

})
export class ReactiveValidation {
  form = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
  }, { validators: [unambigiousRoleValidator, Validators.required] }
  )
}
