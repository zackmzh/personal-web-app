import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevComponent } from './dev.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DevComponent],
  exports:[DevComponent]
})
export class DevModule { }
