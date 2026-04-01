import { Component } from '@angular/core';
import { StructuralDir } from "./structural-dir";

@Component({
  selector: 'app-structural',
  imports: [StructuralDir],
  templateUrl: './structural.html',
})
export class Structural {
  input2 = 'input2 value from structural component';
}
