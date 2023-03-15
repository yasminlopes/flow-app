import { NgModule } from '@angular/core';
import { NavBarModule } from './components/navbar/navbar.module';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [    
    GreetingsComponent
  ],
  imports: [
    CommonModule,
    NavBarModule
  ],
  exports: [
    NavBarModule,
    GreetingsComponent],
})
export class SharedModule {}