import { Component, inject} from '@angular/core';
import { Child1 } from "../child1/child1";
import { Child2 } from "../child2/child2";
import { FormsModule } from '@angular/forms';
import { DataService } from '../data-service';

@Component({
  selector: 'app-parent',
  imports: [Child1, Child2, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  dataService=inject(DataService);
}
