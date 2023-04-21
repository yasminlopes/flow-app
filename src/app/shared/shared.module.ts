import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [    
    GreetingsComponent,
    NavbarComponent,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    NavbarComponent,
    GreetingsComponent,
    FormErrorComponent
    ],
})
export class SharedModule {}