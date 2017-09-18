import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevComponent } from './dev.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ExperienceComponent } from './experience/experience.component';
import { Routes,RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const route:Routes = [
  {path:'dev',component:DevComponent,children:[
    {path:'about',component:AboutComponentComponent},
    // {path:'experience',component:ExperienceComponent},
    {path:'',redirectTo:'about',pathMatch:'full'},
    {path:'contact',component:ContactComponent}
  ]}
]

const devRoute = RouterModule.forRoot(route);

@NgModule({
  imports: [
    CommonModule,
    devRoute
  ],
  declarations: [DevComponent, AboutComponentComponent, ExperienceComponent, ContactComponent],
  exports:[DevComponent]
})
export class DevModule { }
