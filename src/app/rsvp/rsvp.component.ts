import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit, OnDestroy {

  rsvpType: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const values = form.value;
    console.log(values);
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
