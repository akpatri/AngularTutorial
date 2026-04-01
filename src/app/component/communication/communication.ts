import { Component } from '@angular/core';
import { Parent } from "./parent/parent";

@Component({
  selector: 'app-communication',
  imports: [Parent],
  templateUrl: './communication.html',
  styleUrl: './communication.css',
})
export class Communication {}
