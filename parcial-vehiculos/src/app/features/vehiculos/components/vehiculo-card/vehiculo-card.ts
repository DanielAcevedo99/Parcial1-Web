import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehiculo } from '../../../../core/models/vehiculo.model';

@Component({
  selector: 'app-vehiculo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehiculo-card.html',
  styleUrls: ['./vehiculo-card.css'],
})
export class VehiculoCardComponent {
  @Input() vehiculo!: Vehiculo;
}
