import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/auth/pages/login/login').then(m => m.LoginComponent) },

  {
    path: 'vehiculos',
    canActivate: [authGuard],
    loadChildren: () => import('./features/vehiculos/vehiculos-module').then(m => m.VehiculosModule)
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
