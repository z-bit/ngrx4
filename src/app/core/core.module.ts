import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { CoreRouting } from './core-routing';
import { AppMaterialModule } from '../app-material';



@NgModule({
  imports: [
    CommonModule,
    CoreRouting,
    AppMaterialModule,

  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
