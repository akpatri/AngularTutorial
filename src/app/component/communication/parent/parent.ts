import { Component, signal } from '@angular/core';
import { Child1 } from "../child1/child1";
import { Child2 } from "../child2/child2";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ Child1, Child2, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
  preserveWhitespaces: true
})
export class Parent {
  parent_normal: string = '';
  parent_signal=signal("")
  parent_model=signal("")

  parent_received_signal=signal("");
  parent_received_normal="";

  handleChildSignal(data:string){
    this.parent_received_signal.set(data);
  }
  handleNormalOutput(data:string){
    this.parent_received_normal=data;

  }
  /*
  banana in a bax [()] create this implictly to handle bi-directional output from child
  handleBidirectionalOutput(data:string){
    implictly:this.parent_model.set(data);
  }
    */



}
