import { Component, inject } from '@angular/core';
import { Service } from './service/service';
import { INTERFACE_KEY, OBJECT_KEY } from './InjectionToken/InjectionToken';

@Component({
  selector: 'app-dependencyproviders',
  imports: [],
  templateUrl: './dependencyproviders.html',
  styleUrl: './dependencyproviders.css',
})
export class Dependencyproviders {
  injectedData1=inject(Service);
  injectedData2=inject(INTERFACE_KEY) as Service;
  injectedData3=inject(OBJECT_KEY) as {name:string,age:number};

}
