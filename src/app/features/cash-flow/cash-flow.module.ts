import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { CashFlowModalComponent } from './container/cash-flow-modal/cash-flow-modal.component';
import { CashFlowComponent } from './container/cash-flow/cash-flow.component';
import { CashFlowListComponent } from './components/cash-flow-list/cash-flow-list.component';
import { BrDatePipe } from 'src/app/shared/pipes/br-date.pipe';


@NgModule({
  declarations: [
    CashFlowComponent,
    CashFlowModalComponent,
    CashFlowListComponent,
    BrDatePipe
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
})

export class CashFlowModule {}