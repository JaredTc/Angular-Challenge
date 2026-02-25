import { Routes } from '@angular/router';

export const userComponentRoutes: Routes =  [
  {
    path: '',
    loadComponent: () =>
      import('./user-component').then(m => m.UserComponent)
  }

]
