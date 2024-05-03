import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EmployeeComponent} from "./components/employee/employee.component";
import {MissionComponent} from "./components/mission/mission.component";
import {ProjectComponent} from "./components/project/project.component";
import {HardwareComponent} from "./components/hardware/hardware.component";
import {AboutComponent} from "./components/about/about.component";
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard';



const routes: Routes = [
      {path:"", component: LoginComponent},
      {path:"login", component: LoginComponent},
      {path:"admin", component: AdminTemplateComponent, 
         canActivate : [AuthGuard],
         children :[
          {path:"", component: HomeComponent},   
            {path:"home", component: HomeComponent},      
            {path:"profile", component: ProfileComponent},      
            {path:"dashboard", component: DashboardComponent},
            {path:"employee", component: EmployeeComponent,
               canActivate : [AuthorizationGuard], data : {roles:['ADMIN']}
            },
            {path:"mission", component: MissionComponent,
              canActivate : [AuthorizationGuard], data : {roles:['ADMIN']}
            },
            {path:"project", component: ProjectComponent,
              canActivate : [AuthorizationGuard], data : {roles:['ADMIN']}
            },
            {path:"hardware", component: HardwareComponent,
              canActivate : [AuthorizationGuard], data : {roles:['ADMIN']}
            },
            {path:"about", component: AboutComponent},
            {path:"**", component: LoginComponent}

      ]},
      
      


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
