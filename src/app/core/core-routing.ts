import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  {path: '', component: CoreComponent}
];
export const CoreRouting = RouterModule.forChild(routes);