import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { CoreRouting } from './core-routing';
import { AppMaterialModule } from '../app-material';

import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { NgrxCoreModule } from './ngrx-core/ngrx-core.module';




@NgModule({
  imports: [
    CommonModule,
    CoreRouting,
    AppMaterialModule,

    AuthModule,
    BooksModule,
    NgrxCoreModule,

  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
