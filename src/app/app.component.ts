import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // This expects to receive a javascript object form the backend as an argument
  // See Firebase -> authentication -> sign-in method -> web setup for the key and domain
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBRJFYB91b6Wtr13gf_a0nIp3GhGjTdvFk',
      authDomain: 'gremd-wedding-app.firebaseapp.com'
    });
  }

}
