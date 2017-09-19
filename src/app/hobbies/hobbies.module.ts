import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesComponent } from './hobbies.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes:Routes = [
  {path:'hobbies',component:HobbiesComponent}
];

const hobRoute = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule,
    hobRoute
  ],
  declarations: [HobbiesComponent, GalleryComponent],
  exports:[HobbiesComponent]
})
export class HobbiesModule { }
