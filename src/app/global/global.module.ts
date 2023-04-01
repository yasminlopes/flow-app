import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [  
    ButtonComponent, ContentComponent, 
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, ContentComponent],
})
export class GlobalModule {}