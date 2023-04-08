import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // importando o ReactiveFormsModule
import { ButtonComponent } from './button/button.component';
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';
import { CardTotalizadorComponent } from './card/card-totalizador.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ContentComponent,
    ModalComponent,
    CardTotalizadorComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    ContentComponent,
    ModalComponent,
    CardTotalizadorComponent,
    InputComponent,
  ],
})
export class GlobalModule {}
