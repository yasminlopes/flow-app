import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalModule } from 'src/app/global/global.module';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [    
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GlobalModule
  ],
  exports: [NavbarComponent],
})
export class NavBarModule {}