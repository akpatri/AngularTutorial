import { LowerCasePipe } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { NoOfWordsPipe } from './no-of-words-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  imports: [LowerCasePipe, NoOfWordsPipe, FormsModule],
  templateUrl: './pipes.html',
})
export class Pipes {

  @ViewChild('inputRef')
  inputRef!: ElementRef<HTMLInputElement>;
  content: string = '';
  
  ngAfterViewInit() {
    this.content = this.inputRef.nativeElement.value;
  }
}
