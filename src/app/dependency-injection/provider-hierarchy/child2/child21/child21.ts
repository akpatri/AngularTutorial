import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data-service';

@Component({
  selector: 'app-child21',
  imports: [FormsModule],
  templateUrl: './child21.html',
  styleUrl: './child21.css',
})
export class Child21 {
  dataService=inject(DataService);
}
