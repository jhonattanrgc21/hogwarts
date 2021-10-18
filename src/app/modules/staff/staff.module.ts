// Modulos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { StaffComponent } from './staff.component';

@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule
  ],
  exports: [StaffComponent]
})
export class StaffModule { }
