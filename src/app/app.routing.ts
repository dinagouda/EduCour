import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
 import {TeacherLayoutComponent} from './layouts/teacher-layout/teacher-layout.component';
 
import {LoginComponent} from './user/login/login.component';

export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent }

  
 
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // }, 

  // ,
  // {
  //   path: '',
  //   component: TeacherLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: './layouts/teacher-layout/teacher-layout.module#TeacherLayoutModule'
  // }]},
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  // }]},
  ,
  {
    path: '**',
    redirectTo: 'login'
  }
]
