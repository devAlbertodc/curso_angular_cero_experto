import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>
  <Button (click)="increaseBy(1)">+1</Button>
  <Button (click)="resetCounter()">Reset</Button>
  <Button (click)="increaseBy(-1)">-1</Button>
  `,
})

export class CounterComponent {
  public counter:number = 10;

  public increaseBy(value:number):void{
    this.counter = this.counter + value;
  }

  public resetCounter(): void{
    this.counter = 10;
  }
}
