import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  numero1: number = 88;
  numero2: number = 15;
  numero3: number = 5;
  numero4: number = 16;
  mayor: number = 0;
  resultado: boolean = false;

  calcularMayor() {
    this.mayor = Math.max(this.numero1, this.numero2, this.numero3, this.numero4);
    this.resultado = true;
  }

}
