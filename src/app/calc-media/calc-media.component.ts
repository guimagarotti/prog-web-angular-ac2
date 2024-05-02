import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-media',
  templateUrl: './calc-media.component.html',
  styleUrls: ['./calc-media.component.css']
})
export class CalcMediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  resultado: number = 0;

  constructor() { }

  ngOnInit() {

  }

  calcularMedia() {
    this.resultado = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
  }
}
