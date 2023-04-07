import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';
import { CardTotalizadorComponent } from './card/card-totalizador.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ContentComponent,
    ModalComponent,
    CardTotalizadorComponent
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    ContentComponent,
    ModalComponent,
    CardTotalizadorComponent
  ],
})
export class GlobalModule {}
