import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  
  resultados = { numeros: [] as number[], cuadrados: [] as number[], mitades: [] as number[] };

  calcular() {
    const numeros = [];
    const cuadrados = [];
    const mitades = [];

    for (let i = 15; i <= 70; i++) {
      numeros.push(i);
      cuadrados.push(i ** 2);
      mitades.push(i / 2);
    }

    this.resultados = { numeros, cuadrados, mitades };
  }
}
