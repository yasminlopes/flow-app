import { Routes } from '@angular/router';
import { AdminComponent } from '../layouts/admin/admin.component';
import { EntradaComponent } from './entrada/container/entrada/entrada.component';
import { HomeComponent } from './home/container/home/home.component';

export const featuresRoutes: Routes = [
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'entrada',
        component: EntradaComponent,
        loadChildren: () =>
          import('./entrada/entrada.module').then((m) => m.EntradaModule),
      },
    ]
    }
  
];
