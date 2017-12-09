import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, CanLoad, CanActivate } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', loadChildren: './photos/photos.module#PhotosModule', canActivate: [AuthGuard] },
  { path: 'registry', loadChildren: './registry/registry.module#RegistryModule', canActivate: [AuthGuard] },
  { path: 'rsvp', loadChildren: './rsvp/rsvp.module#RsvpModule', canActivate: [AuthGuard] },
  { path: 'story', loadChildren: './story/story.module#StoryModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
