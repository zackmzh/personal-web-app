import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DevComponent } from "./dev/dev.component";
import { AboutComponentComponent } from './dev/about-component/about-component.component';
import { ExperienceComponent } from './dev/experience/experience.component';


export const routes:Routes =[
  {path:"home",component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'dev',component:DevComponent}

];
