import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlobalModule } from 'src/app/global/global.module';
import { EntradaComponent } from './container/entrada/entrada.component';
import { EntradaModalComponent } from './container/entrada-modal/entrada-modal.component';


@NgModule({
  declarations: [
    EntradaComponent,
    EntradaModalComponent
  ],
  imports: [
    CommonModule,
    GlobalModule
  ],
  exports: [],
})

export class EntradaModule {}