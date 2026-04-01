import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDir]',
})
export class StructuralDir {
  private templateRef = inject(TemplateRef); //refer ng-template
  private viewContainerRef = inject(ViewContainerRef); //refer container view
  @Input()
  appStructuralDirInput1='';
  appStructuralDirInput2=Input();
  async ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef,{
      $implicit:'implict-data',
      topic: 'Angular structural directive',
      date: '01-04-2024',
      input1: this.appStructuralDirInput1,
    });
  }
}
