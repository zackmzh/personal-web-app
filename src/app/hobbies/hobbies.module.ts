import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesComponent } from './hobbies.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HobbiesComponent],
  exports:[HobbiesComponent]
})
export class HobbiesModule { }
