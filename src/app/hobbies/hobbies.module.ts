import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesComponent } from './hobbies.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HobbiesComponent, GalleryComponent],
  exports:[HobbiesComponent]
})
export class HobbiesModule { }
