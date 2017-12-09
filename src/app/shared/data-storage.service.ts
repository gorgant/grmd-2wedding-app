import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class DataStorageService {

  constructor(
    private http: Http,
    private authService: AuthService
  ) {}

  storeRsvp() {

  }

}
