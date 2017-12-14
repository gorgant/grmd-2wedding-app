import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { RsvpForm } from '.././rsvp-form.module';
import { RsvpService } from '.././rsvp.service';
import { DataStorageService } from './../../shared/data-storage.service';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent implements OnInit, OnDestroy {

  rsvpType: string;

  constructor(
    private rsvpService: RsvpService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const values = form.value;
    const timeStamp = Date.now();
    const firstName = values.firstName.trim();
    const lastName = values.lastName.trim();
    const email = values.email.trim();
    let guestFirstName: string;
    let guestLastName: string;
    let guestEmail: string;
    if (this.rsvpType === 'double') {
      guestFirstName = values.guestFirstName.trim();
      guestLastName = values.guestLastName.trim();
      guestEmail = values.guestEmail.trim();
    }
    const rsvpForm = new RsvpForm(
      firstName,
      lastName,
      email,
      guestFirstName,
      guestLastName,
      guestEmail,
      timeStamp);
    this.rsvpService.setRsvpForm(rsvpForm);
    this.dataStorageService.storeRsvp()
      .subscribe(
        (response: Response) => {
          this.router.navigate(['success'], {relativeTo: this.route});
          console.log(response);
        },
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
