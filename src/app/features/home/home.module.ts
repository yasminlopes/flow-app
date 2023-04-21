import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CashFlowModule } from '../cash-flow/cash-flow.module';
import { HomeComponent } from './container/home/home.component';


@NgModule({
  declarations: [  
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    CashFlowModule
  ],
  exports: [HomeComponent],
})

export class HomeModule {}