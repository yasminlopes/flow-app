import { Routes } from '@angular/router';
import { HomeComponent } from './home/container/home/home.component';

export const pagesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
