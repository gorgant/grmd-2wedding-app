import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
