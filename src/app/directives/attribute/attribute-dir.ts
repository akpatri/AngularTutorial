
import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appAttributeDir]',
  host:{
    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()'
  }
})
export class AttributeDir {
  private el= inject(ElementRef);
  appAttributeDir=input('black');
  mouseEnterColor=input('lightblue');
  mouseLeaveColor=input('red');

  constructor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.mouseEnterColor();
    this.el.nativeElement.style.color = this.appAttributeDir();
  }

  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.mouseLeaveColor();
    this.el.nativeElement.style.color = 'black';
  }
}
