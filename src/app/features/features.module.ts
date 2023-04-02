import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../global/global.module';
import { SharedModule } from '../shared/shared.module';
import { EntradaModule } from './entrada/entrada.module';
import { featuresRoutes } from './features.routing';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(featuresRoutes),
    HomeModule,
    EntradaModule,
  ],
  exports: [],
})

export class FeaturesModule {}