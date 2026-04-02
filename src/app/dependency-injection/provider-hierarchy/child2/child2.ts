import { Component, inject } from '@angular/core';
import { Child21 } from "./child21/child21";
import { FormsModule } from '@angular/forms';
import { DataService } from '../data-service';

@Component({
  selector: 'app-child2',
  imports: [Child21, FormsModule],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
  providers: [DataService]
})
export class Child2 {
    dataService:DataService=inject(DataService); //injection using inject function
    

}
