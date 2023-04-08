import { NgModule } from '@angular/core';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../global/global.module';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  declarations: [    
    GreetingsComponent,
    NavbarComponent,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GlobalModule
  ],
  exports: [
    NavbarComponent,
    GreetingsComponent,
    FormErrorComponent
    ],
})
export class SharedModule {}