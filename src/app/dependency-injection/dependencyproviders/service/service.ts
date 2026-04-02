import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private data: string[] = ["data1", "data2"];

  addData(item: string): void {
    this.data.push(item);
  }
  getData(): string[] {
    return [...this.data];
  }
}
