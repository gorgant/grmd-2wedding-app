import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', loadChildren: './photos/photos.module#PhotosModule' },
  { path: 'registry', loadChildren: './registry/registry.module#RegistryModule' },
  { path: 'rsvp', loadChildren: './rsvp/rsvp.module#RsvpModule' },
  { path: 'story', loadChildren: './story/story.module#StoryModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
