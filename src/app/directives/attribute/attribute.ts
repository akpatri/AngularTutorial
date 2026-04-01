import { Component, signal } from '@angular/core';
import { AttributeDir } from './attribute-dir';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  imports: [AttributeDir, FormsModule],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
  enterColor=signal('');
  leaveColor=signal('');

}
