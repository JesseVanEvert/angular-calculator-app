import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numbers = Array.from(Array(10).keys())
  display: number = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

}
