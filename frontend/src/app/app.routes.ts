import { Routes } from '@angular/router';

import { RegisterComponent } from '../features/auth/register/register.component';
import { LoginComponent } from '../features/auth/login/login.component';
import { ProfileComponent } from '../features/auth/profile/profile.component';
import { ChangePasswordComponent } from '../features/auth/change-password/change-password.component';

import { EmployeeListComponent } from '../features/employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from '../features/employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from '../features/employee/employee-edit/employee-edit.component';
import { EmployeeDetailsComponent } from '../features/employee/employee-details/employee-details.component';

import { DashboardComponent } from '../layouts/dashboard/dashboard.component';

import { authGuard, loginGuard } from '../core/guards/auth.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loginGuard]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],

    children: [

      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
      },

      {
        path: 'employees',
        component: EmployeeListComponent
      },

      {
        path: 'employees/add',
        component: EmployeeAddComponent
      },

      {
        path: 'employees/edit/:id',
        component: EmployeeEditComponent
      },

      {
        path: 'employees/:id',
        component: EmployeeDetailsComponent
      },

      {
        path: 'profile',
        component: ProfileComponent
      },

      {
        path: 'change-password',
        component: ChangePasswordComponent
      }

    ]

  },

  {
    path: '**',
    redirectTo: 'login'
  }

];