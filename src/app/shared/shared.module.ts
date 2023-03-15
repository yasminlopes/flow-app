import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarModule } from './components/navbar/navbar.module';


@NgModule({
  declarations: [  
  ],
  imports: [
    BrowserModule,
    NavBarModule
  ],
  exports: [NavBarModule],
})
export class SharedModule {}