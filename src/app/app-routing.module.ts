import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginRegistrationComponent } from './auth/userAuth/user-login-registration/user-login-registration.component';
import { AdminLoginRegistrationComponent } from './auth/AdminAuth/admin-login-registration/admin-login-registration.component';
import { WhoLoginRegistrationComponent } from './auth/WhoAuth/who-login-registration/who-login-registration.component';
import { HomeComponent } from './user/home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { WhoRegistrationComponent } from './auth/WhoAuth/who-registration/who-registration.component';
import { WhoDashboardComponent } from './who/who-dashboard/who-dashboard.component';

const routes: Routes = [
  {path:'',component:UserLoginRegistrationComponent,title:'UserLogin'},
  {path:'adminLogin',component:AdminLoginRegistrationComponent,title:'AdminLogin'},
  {path:'WhoLogin',component:WhoLoginRegistrationComponent,title:'WHO Login'},
  {path:'WhoRegistration',component:WhoRegistrationComponent,title:'WHO Registration'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'admin-dashboard',component:AdminDashboardComponent,title:'Dashboard'},
  {path:'who-dashboard',component:WhoDashboardComponent,title:'Dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
