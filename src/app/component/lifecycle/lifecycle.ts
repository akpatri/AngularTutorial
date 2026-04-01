import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  {
  constructor(){
    console.log("Constructor called");
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(){
    console.log("ngOnChanges called");
  }
  ngOnInit(){
    console.log("ngOnInit called");
  }
  ngDoCheck(){
    console.log("ngDoCheck called");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
}
