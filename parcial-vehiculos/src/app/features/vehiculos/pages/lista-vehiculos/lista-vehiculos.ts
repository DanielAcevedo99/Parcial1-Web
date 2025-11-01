import { Component, inject, signal } from '@angular/core';
import { CommonModule, NgFor, AsyncPipe, DecimalPipe, NgIf } from '@angular/common';
import { VehiculosService } from '../../../../core/services/vehiculos';
import { Vehiculo } from '../../../../core/models/vehiculo.model';
import { Observable } from 'rxjs';
import { VehiculoCardComponent } from '../../components/vehiculo-card/vehiculo-card';

@Component({
  selector: 'app-lista-vehiculos',
  standalone: true,
  imports: [CommonModule, NgFor, AsyncPipe, DecimalPipe, NgIf, VehiculoCardComponent],
  templateUrl: './lista-vehiculos.html',
  styleUrls: ['./lista-vehiculos.css'],
})
export class ListaVehiculosComponent {
  private svc = inject(VehiculosService);
  vehiculos$!: Observable<Vehiculo[]>;
  seleccionado = signal<Vehiculo | null>(null);

  ngOnInit() {
    this.vehiculos$ = this.svc.getVehiculos();
  }

  seleccionar(v: Vehiculo) {
    this.seleccionado.set(v);
  }
}
