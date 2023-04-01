import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [  
    ButtonComponent, TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, TableComponent],
})
export class GlobalModule {}