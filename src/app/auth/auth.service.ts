import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AuthService {
  token: string;
  authenticationResponse = new Subject<boolean>();

  constructor(private router: Router) {}

  // The auth() method gives us access to all the firebase auth methods
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(
            innerResponse => {
              this.router.navigate(['/']);
              firebase.auth().currentUser.getIdToken()
                .then(
                  (token: string) => this.token = token
                );
            }
          )
          .catch(
            error => console.log(error)
          );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => {
          console.log(error);
          this.authenticationResponse.next(false);
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
  }

  getToken() {
    // This is an asynchronous call because not only does it fetch from local storage (synchronous)
    // ... it also pings Firebase server to ensure the token hasn't expired
    // ... if expired we'd need to implement some error handling to get the user to try again
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
