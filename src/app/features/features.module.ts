import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { featuresRoutes } from './features.routing';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(featuresRoutes),
    HomeModule
  ],
  exports: [],
})

export class FeaturesModule {}