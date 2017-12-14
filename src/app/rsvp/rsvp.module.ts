import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RsvpComponent } from './rsvp.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { RsvpSuccessComponent } from './rsvp-success/rsvp-success.component';
import { RsvpRoutingModule } from './rsvp-routing.module';

@NgModule({
  declarations: [
    RsvpComponent,
    RsvpFormComponent,
    RsvpSuccessComponent
  ],
  imports: [
    CommonModule,
    RsvpRoutingModule,
    FormsModule
  ]
})
export class RsvpModule {}
