import { Routes } from '@angular/router';
import { CashFlowComponent } from './cash-flow/container/cash-flow/cash-flow.component';
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
        path: 'fluxo-caixa',
        component: CashFlowComponent,
        loadChildren: () =>
          import('./cash-flow/cash-flow.module').then((m) => m.CashFlowModule),
      },
    ]
    }
  
];
