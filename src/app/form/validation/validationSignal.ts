import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { unambigiousRoleValidator } from './validator';

@Component({
  selector: 'app-validation',
  imports: [],
  templateUrl: './validation.html',
  styleUrl: './validation.css',
})
export class Validation {
  form = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
  }, { validators:[unambigiousRoleValidator,Validators.required] }
  )
}
