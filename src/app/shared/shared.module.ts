import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarModule } from './components/navbar/navbar.module';
import { GreetingsComponent } from './components/greetings/greetings.component';


@NgModule({
  declarations: [    
    GreetingsComponent
  ],
  imports: [
    BrowserModule,
    NavBarModule
  ],
  exports: [
    NavBarModule,
    GreetingsComponent],
})
export class SharedModule {}