import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styleUrl: './binding.css',
  host: {
    'document:click': 'handleBodyClick()',
    'window:click': 'handleWindowClick()'
  }
})
export class Binding {
  normal_data="This is normal data";
  signal_data=signal<string>("This is signal data"); //mainly used to state update
  event=signal<Event | null>(null);
  model_data=model<string>(""); //mainly used for two way binding
  handleInputChange(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.normal_data = inputElement.value;
    this.signal_data.set(inputElement.value);
    this.model_data.set(inputElement.value);
    this.event.set(event);
  }
  handleBodyClick(){
    console.log("body clicked");
  }
  handleWindowClick(){
    console.log("window clicked");
  }

}
