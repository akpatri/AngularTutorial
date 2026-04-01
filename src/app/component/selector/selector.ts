import { Component } from '@angular/core';
import { Selectors } from './selectors/selectors';

@Component({
  selector: 'app-selector',
  imports: [Selectors],
  templateUrl: './selector.html',
  styleUrl: './selector.css',
})
export class Selector {}
