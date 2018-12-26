import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { HomePageComponent } from './shared/home-page/home-page.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'doctor',
    loadChildren: './doctor/doctor.module#DoctorModule'
  }]
},{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }]
},{
  path: '**',
  redirectTo: 'error/404'
}];

