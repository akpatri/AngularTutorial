import { Component } from '@angular/core';
import { Parent } from "./parent/parent";

@Component({
  selector: 'app-provider-hierarchy',
  imports: [Parent],
  templateUrl: './provider-hierarchy.html',
  styleUrl: './provider-hierarchy.css',
})
export class ProviderHierarchy {}
