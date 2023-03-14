import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { pagesRoutes } from './pages.routing';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes),
    HomeModule
  ],
  exports: [],
})

export class PagesModule {}