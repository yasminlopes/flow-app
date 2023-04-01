import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlobalModule } from 'src/app/global/global.module';
import { EntradaComponent } from './container/entrada/entrada.component';


@NgModule({
  declarations: [
    EntradaComponent
  ],
  imports: [
    CommonModule,
    GlobalModule
  ],
  exports: [],
})

export class EntradaModule {}