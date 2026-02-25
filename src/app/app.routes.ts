import { Routes } from '@angular/router';
import {MainContent} from './layout/main-content/main-content';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },

  {
    path: 'users',
    component: MainContent,
    loadChildren: () => import('./features/user-component/user-component.routes').then(m => m.userComponentRoutes)
  }
];
