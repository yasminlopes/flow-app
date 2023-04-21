import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ButtonComponent } from './components/button/button.component';
import { CardTotalizerComponent } from './components/card-totalizer/card-totalizer.component';
import { ContentComponent } from './components/content/content.component';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ContentComponent,
    ModalComponent,
    CardTotalizerComponent,
    InputComponent,
    SelectComponent
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
    CardTotalizerComponent,
    InputComponent,
    SelectComponent,
  ],
})

export class CoreModule {}
