import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { AuthService } from './../auth/auth.service';
import { RsvpService } from './../rsvp/rsvp.service';

@Injectable()
export class DataStorageService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private rsvpService: RsvpService
  ) {}

  storeRsvp() {
    const token = this.authService.getToken();
    const rsvpForm = this.rsvpService.getRsvpForm();
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(
      'https://gremd-wedding-app.firebaseio.com/rsvp-foreelz.json?auth=' + token,
      rsvpForm,
      {headers: headers});
  }

}
