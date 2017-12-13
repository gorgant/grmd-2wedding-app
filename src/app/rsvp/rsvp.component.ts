import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { RsvpForm } from './rsvp-form.module';
import { RsvpService } from './rsvp.service';
import { DataStorageService } from './../shared/data-storage.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit, OnDestroy {

  rsvpType: string;

  constructor(
    private rsvpService: RsvpService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const values = form.value;
    const timeStamp = Date.now();
    const rsvpForm = new RsvpForm(
      values.firstName,
      values.lastName,
      values.email,
      values.guestFirstName,
      values.guestLastName,
      values.guestEmail,
      timeStamp);
    this.rsvpService.setRsvpForm(rsvpForm);
    this.dataStorageService.storeRsvp()
      .subscribe(
        (response: Response) => console.log(response),
        (error) => console.log(error)
      );

    form.reset();
    console.log(this.rsvpService.getRsvpForm());
  }

  assignRsvpType(rsvpType) {
    if (rsvpType === 'single') {
      this.rsvpType = 'single';
    } else {
      this.rsvpType = 'double';
    }
  }

  ngOnDestroy() {
    this.rsvpType = null;
  }

}
