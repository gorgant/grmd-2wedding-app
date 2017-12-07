import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RsvpComponent } from './rsvp.component';
import { RsvpRoutingModule } from './rsvp-routing.module';

@NgModule({
  declarations: [
    RsvpComponent
  ],
  imports: [
    CommonModule,
    RsvpRoutingModule
  ]
})
export class RsvpModule {}
