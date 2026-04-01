import { Component, EventEmitter, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs:['child1NormalInput'], //this is for receiving input from parent by attribute binding
  outputs:['child1NormalOutput'] //this is one of the way for sending output to parent
})
export class Child1 {
  child1NormalInput="";
  child1SignalInput=input("");
  child1BidirectionalInput=model(""); //created input()+output() for bi-directional binding

  child1NormalOutput=new EventEmitter<string>();
  sendNormalOutput(value:string){
    this.child1NormalOutput.emit(value);
  }

  child1SignalOutput=output<string>();
  sendSignalOutput(value:string){
    this.child1SignalOutput.emit(value);
  }
}
