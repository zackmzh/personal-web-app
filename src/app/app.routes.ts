import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DevComponent } from "./dev/dev.component";


export const routes:Routes =[
  {path:"home",component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'dev',component:DevComponent}
];
