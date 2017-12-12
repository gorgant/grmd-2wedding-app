import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit, AfterViewChecked, OnDestroy {

  @ViewChild('firstNameInput') firstNameInput: ElementRef;
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
    console.log(this.rsvpType);
  }

  ngAfterViewChecked() {
    if (this.rsvpType) {
      this.firstNameInput.nativeElement.focus();
    }
  }

  ngOnDestroy() {
    this.rsvpType = null;
  }

}
