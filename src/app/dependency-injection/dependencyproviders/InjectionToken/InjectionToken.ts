import { InjectionToken } from "@angular/core";
import { Service } from "../service/service";

export interface Key{

}
export const INTERFACE_KEY = new InjectionToken<Key>('description only for debugging or tooling',{
  providedIn:'root',
  factory:()=>{
    return new Service();
  }
});
export const OBJECT_KEY = new InjectionToken<Object>('description only for debugging or tooling',{
  providedIn:'root',
  factory:()=>{
    return {name:'Asish kumar patri',age:23};
  }
});

