import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {
  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  resultadoApolice: any;

  constructor() { }

  ngOnInit() { }

  calcularApolice() {
    if (this.sexo == 'M' && this.idade <= 25)
      this.resultadoApolice = this.valorAutomovel * 0.15;
    else if (this.sexo == 'M' && this.idade > 25)
      this.resultadoApolice = this.valorAutomovel * 0.1;
    else if (this.sexo == 'F')
      this.resultadoApolice = this.valorAutomovel * 0.08;
  }
}
