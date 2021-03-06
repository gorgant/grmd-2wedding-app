import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logistics', loadChildren: './logistics/logistics.module#LogisticsModule', canActivate: [AuthGuard] },
  { path: 'photos', loadChildren: './photos/photos.module#PhotosModule', canActivate: [AuthGuard] },
  { path: 'registry', loadChildren: './registry/registry.module#RegistryModule', canActivate: [AuthGuard] },
  { path: 'rsvp', loadChildren: './rsvp/rsvp.module#RsvpModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
