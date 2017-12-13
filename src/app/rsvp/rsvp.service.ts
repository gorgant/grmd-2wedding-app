import { Injectable } from '@angular/core';
import { RsvpForm } from './rsvp-form.module';

// @Injectable()
export class RsvpService {
  private rsvpForm: RsvpForm;

  setRsvpForm(rsvpForm: RsvpForm) {
    this.rsvpForm = rsvpForm;
  }

  getRsvpForm() {
    return this.rsvpForm;
  }

}
