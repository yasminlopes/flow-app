import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalModule } from 'src/app/global/global.module';
import { CashFlowModalComponent } from './container/cash-flow-modal/cash-flow-modal.component';
import { CashFlowComponent } from './container/cash-flow/cash-flow.component';


@NgModule({
  declarations: [
    CashFlowComponent,
    CashFlowModalComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
})

export class CashFlowModule {}