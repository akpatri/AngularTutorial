import { Component, inject } from '@angular/core';
import { DataService } from '../data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
})
export class Child1 {
  dataService=inject(DataService);

}
