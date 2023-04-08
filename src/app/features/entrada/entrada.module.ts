import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlobalModule } from 'src/app/global/global.module';
import { EntradaComponent } from './container/entrada/entrada.component';
import { EntradaModalComponent } from './container/entrada-modal/entrada-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EntradaComponent,
    EntradaModalComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
})

export class EntradaModule {}