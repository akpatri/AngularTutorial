import { JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  inputCtrl = new FormControl(''); //form control: represent data of a input

  //from Group: represent data of multiple input
  formGroup1 = new FormGroup({
    inputGrpCtrl: new FormControl(''),
    inputGrp1: new FormGroup({
      inputNxtGrp1Ctrl1: new FormControl(''),
      inputNxtGrp1Ctrl2: new FormControl(''),
    }),

  });
  //to update enitre formgroup programmatically
  updateFormGroup() {
    this.formGroup1.setValue({
      inputGrpCtrl: 'Hello',
      inputGrp1: {
        inputNxtGrp1Ctrl1: 'My',
        inputNxtGrp1Ctrl2: 'World'
      },
    });
  }
  //to update part of formgroup programmatically
  updateFormGroupPartially() {
    this.formGroup1.patchValue({
      inputGrpCtrl: 'My',
      inputGrp1: {
        inputNxtGrp1Ctrl1: 'World',
      }
    });
  }

  //Form array
  formArray=new FormArray<FormControl<string|null>>([]);
  addInput(){
    this.formArray.push(new FormControl(''));
  }
  removeInput(){
    this.formArray.removeAt(this.formArray.length-1);
  }


  // Form Builder
  private formBuilder = inject(FormBuilder);
  fbContInput = this.formBuilder.control('');
  fbGrpInput = this.formBuilder.group({
    fbgControlInput: '', //with in group of FormBuilder '' or [''] -> new FormContrl('',[validators])
    fbgGrpInput: this.formBuilder.group({
      ctrl1: [''],
    }),
    arr: this.formBuilder.array([]),
  })
  get arr() {
    return this.fbGrpInput.get('arr') as FormArray;
  }
  addArr() {
    this.arr.push(this.formBuilder.control(''));
  }
  removeArr() {
    this.arr.removeAt(this.arr.length-1);
  }
}
