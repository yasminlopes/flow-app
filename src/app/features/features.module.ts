import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CashFlowModule } from './cash-flow/cash-flow.module';
import { featuresRoutes } from './features.routing';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(featuresRoutes),
    HomeModule,
    CashFlowModule,
  ],
  exports: [],
})

export class FeaturesModule {}