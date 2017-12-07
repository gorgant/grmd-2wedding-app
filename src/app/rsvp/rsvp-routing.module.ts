import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RsvpComponent } from './rsvp.component';

const rsvpRoutes: Routes = [
  { path: '', component: RsvpComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rsvpRoutes)
  ],
  exports: [RouterModule]
})
export class RsvpRoutingModule {}
