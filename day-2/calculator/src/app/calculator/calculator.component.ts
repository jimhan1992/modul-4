import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  calculator: string = '+';

  // @ts-ignore
  result() {
    if (this.calculator === '+') {
      return this.number1 + this.number2
    }
    if (this.calculator === '-') {
      return this.number1 - this.number2
    }
    if (this.calculator === '*') {
      return this.number1 * this.number2
    }
    if (this.calculator === '/') {
      return this.number1 / this.number2
    }

  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
