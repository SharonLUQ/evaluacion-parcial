import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {

  materias: number = 0;
  costoPorMateria: number = 520;
  descuento: number = 0;
  total: number = 0;
  resultadoVisible: boolean = false;

  calcularMatricula() {
    if (this.materias > 5) {
      this.descuento = 0.10;
    } else {
      this.descuento = 0;
    }
    this.total = this.materias * this.costoPorMateria * (1 - this.descuento);
    this.resultadoVisible = true;
  }

  actualizarMaterias(value: string) {
    this.materias = +value;
  }
}
