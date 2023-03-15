import { Routes } from '@angular/router';
import { HomeComponent } from './home/container/home/home.component';

export const featuresRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'entrada',
    loadChildren: () =>
      import('./entrada/entrada.module').then((m) => m.EntradaModule),
  },
];
