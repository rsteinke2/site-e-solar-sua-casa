import { Component } from '@angular/core';

@Component({
  selector: 'app-solar-calculator',
  templateUrl: './solar-calculator.component.html',
  styleUrls: ['./solar-calculator.component.css']
})
export class SolarCalculatorComponent {

  consumoMensal: number | null = null;
  irradiacaoSolar: number | null = null;
  potenciaPlaca: number | null = null;
  capacidadeTotal: number | null = null;
  numeroPlacas: number | null = null;
  custoMedio: number | null = null; 
  capacidadeEscolhida: number | null = null; 
  sistemaEscolhido: number | null = null;

  // lista de dados capacidadeSistema : preço
  priceList: { capacidadeSistema: number; price: number }[] = [
    { capacidadeSistema: 2000, price: 4.48 },
    { capacidadeSistema: 4000, price: 3.68 },
    { capacidadeSistema: 8000, price: 3.26 },
    { capacidadeSistema: 12000, price: 3.02 },
    { capacidadeSistema: 30000, price: 2.81 },
    { capacidadeSistema: 50000, price: 2.84 },
    { capacidadeSistema: 75000, price: 3.03 },
    { capacidadeSistema: 150000, price: 2.94 },
    { capacidadeSistema: 300000, price: 2.94 },
    { capacidadeSistema: 500000, price: 3.05 },
    { capacidadeSistema: 1000000, price: 2.92 },
    { capacidadeSistema: 5000000, price: 2.84 }
  ];

  calcularPlacas() {
    // Verifique se as propriedades não são null antes de converter para número
    if (this.consumoMensal !== null && this.irradiacaoSolar !== null && this.potenciaPlaca !== null) {
      this.consumoMensal = parseFloat(this.consumoMensal.toString());
      this.irradiacaoSolar = parseFloat(this.irradiacaoSolar.toString());
      this.potenciaPlaca = parseFloat(this.potenciaPlaca.toString());
  
      // cálculo de capacidade / número de placas e capacidadeEscolhida
      this.capacidadeTotal = parseFloat((this.consumoMensal / 30 / this.irradiacaoSolar / 0.8).toFixed(2));
      this.numeroPlacas = Math.ceil(this.capacidadeTotal * 1000 / this.potenciaPlaca);
      this.capacidadeEscolhida = this.numeroPlacas * this.potenciaPlaca;

      if (this.capacidadeEscolhida < 2000) {
        this.sistemaEscolhido = 2000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(2000);
      } else if (this.capacidadeEscolhida < 4000) {
        this.sistemaEscolhido = 4000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(4000);
      } else if (this.capacidadeEscolhida < 8000) {
        this.sistemaEscolhido = 8000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(8000);
      } else if (this.capacidadeEscolhida < 12000) {
        this.sistemaEscolhido = 12000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(12000);
      } else if (this.capacidadeEscolhida < 30000) {
        this.sistemaEscolhido = 30000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(30000);
      } else if (this.capacidadeEscolhida < 75000) {
        this.sistemaEscolhido = 75000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(75000);
      } else if (this.capacidadeEscolhida < 150000) {
        this.sistemaEscolhido = 150000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(150000);
      } else if (this.capacidadeEscolhida < 300000) {
        this.sistemaEscolhido = 300000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(300000);
      } else if (this.capacidadeEscolhida < 500000) {
        this.sistemaEscolhido = 500000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(500000);
      } else if (this.capacidadeEscolhida < 1000000) {
        this.sistemaEscolhido = 1000000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(1000000);
      } else if (this.capacidadeEscolhida < 5000000) {
        this.sistemaEscolhido = 5000000;
        this.custoMedio = this.sistemaEscolhido * this.getPriceForCapacidadeSistema(5000000);
      }
    }
  }
// função busca preço na lista priceList
  private getPriceForCapacidadeSistema(capacidade: number): number {
    const priceItem = this.priceList.find(item => item.capacidadeSistema === capacidade);
    return priceItem ? priceItem.price : 0;
  }

// função limpeza dos campos
  limparCampos() {
    this.consumoMensal = null;
    this.irradiacaoSolar = null;
    this.potenciaPlaca = null;
    this.capacidadeTotal = null;
    this.numeroPlacas = null;
    this.custoMedio = null;
    this.sistemaEscolhido = null;
  }
}