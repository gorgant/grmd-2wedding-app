import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RsvpComponent } from './rsvp.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { RsvpSuccessComponent } from './rsvp-success/rsvp-success.component';

const rsvpRoutes: Routes = [
  { path: '', component: RsvpComponent,
    children: [
      { path: '', component: RsvpFormComponent },
      { path: 'success', component: RsvpSuccessComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(rsvpRoutes)
  ],
  exports: [RouterModule]
})
export class RsvpRoutingModule {}
