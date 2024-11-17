import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  salario = 0;
  anios = 0;
  utilidad = 0;

  actualizarSalario(value: string) {
    this.salario = +value;
  }

  actualizarAnios(value: string) {
    this.anios = +value;
  }

  calcularUtilidad() {
    if (this.anios < 1) {
      this.utilidad = this.salario * 0.05;
    } else if (this.anios >= 1 && this.anios < 2) {
      this.utilidad = this.salario * 0.07;
    } else if (this.anios >= 2 && this.anios < 5) {
      this.utilidad = this.salario * 0.1;
    } else if (this.anios >= 5 && this.anios < 10) {
      this.utilidad = this.salario * 0.15;
    } else {
      this.utilidad = this.salario * 0.2;
    }

  }
}
