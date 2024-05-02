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

const routes: Routes = [
      {path:"home", component: HomeComponent},
      {path:"profile", component: ProfileComponent},
      {path:"login", component: LoginComponent},
      {path:"dashboard", component: DashboardComponent},
      {path:"employee", component: EmployeeComponent},
      {path:"mission", component: MissionComponent},
      {path:"project", component: ProjectComponent},
      {path:"hardware", component: HardwareComponent},
      {path:"about", component: AboutComponent},
      {path:"**", component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
