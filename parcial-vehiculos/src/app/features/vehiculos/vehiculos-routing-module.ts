import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVehiculosComponent } from './pages/lista-vehiculos/lista-vehiculos';
import { DetalleVehiculoComponent } from './pages/detalle-vehiculo/detalle-vehiculo';

const routes: Routes = [
  { path: '', component: ListaVehiculosComponent },   // /vehiculos
  { path: ':id', component: DetalleVehiculoComponent } // /vehiculos/123
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosRoutingModule {}
