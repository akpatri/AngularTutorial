import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  dataModel = signal({
    name: '',
    email: '',
  }) //this represent the datamodel, maintain bidirecional relation with form

  signalForm = form(this.dataModel) //declare a form that uses that model


  async onSubmit(){
    const formData= this.dataModel();
    const email=formData.email;
    const name=formData.name
    
  }

  updateForm(){
    this.dataModel.set({
      name:'',
      email:''
    });
  }
}
