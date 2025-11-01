import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';

@Injectable({ providedIn: 'root' })
export class VehiculosService {
  private http = inject(HttpClient);
  private url = 'assets/data/vehiculos.json';

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.url);
  }

  getVehiculoById(id: number): Observable<Vehiculo | undefined> {
    return this.getVehiculos().pipe(map(vs => vs.find(v => v.id === id)));
  }
}
