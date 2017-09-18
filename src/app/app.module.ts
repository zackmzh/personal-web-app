import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route,Router,RouterModule } from '@angular/router';
import { routes } from './app.routes';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DevModule } from './dev/dev.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    RouterModule.forRoot(routes),
    DevModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
