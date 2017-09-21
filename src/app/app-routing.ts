import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './core/core.module#CoreModule'}
];
export const AppRouting = RouterModule.forRoot(routes);