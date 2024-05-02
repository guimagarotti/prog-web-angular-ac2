import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number = 0;
  operation: string = '';
  num2: number = 0;
  resultado: number = 0;

  constructor() { }

  ngOnInit() { }

  realizarCalculo() {
    switch (this.operation) {
      case '+':
        this.resultado = this.num1 + this.num2;
        break;
      case '-':
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.resultado = this.num1 / this.num2;
        break;
    }
  }
}
