import { FormsModule } from '@angular/forms';
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
    RsvpRoutingModule,
    FormsModule
  ]
})
export class RsvpModule {}
