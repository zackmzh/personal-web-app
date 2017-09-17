import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeHeadComponentComponent } from './home-head-component/home-head-component.component';
import { HomeContentComponentComponent } from './home-content-component/home-content-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, HomeHeadComponentComponent, HomeContentComponentComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
