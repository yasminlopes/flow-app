import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GlobalModule } from 'src/app/global/global.module';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [    
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    GlobalModule
  ],
  exports: [NavbarComponent],
})
export class NavBarModule {}