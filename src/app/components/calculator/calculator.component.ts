import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numbers = Array.from(Array(10).keys())
  formula: string = "";

  calculate(fn:string) {
    return new Function('return ' + fn)();
  }

  onNumberPress(value: number){
    this.formula= this.formula + value;
  }

  onModificationPress(modification: string){
    this.formula = this.formula + modification;
  }

  onResultPress(): void{
    this.formula = this.calculate(this.formula);
  }

  onDotPress(): void {
    this.formula = this.formula + ".";
  }

  onClear(): void {
    this.formula = "";
  }

  onSquare(): void {
    this.formula = this.formula + "**2";
  }

  onPowerOfN(){
    this.formula = this.formula + "**";
  }  

  constructor() {}

  ngOnInit(): void {
  }

}
