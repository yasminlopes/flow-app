import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ContentComponent,
    ModalComponent
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    ContentComponent,
    ModalComponent
  ],
})
export class GlobalModule {}
