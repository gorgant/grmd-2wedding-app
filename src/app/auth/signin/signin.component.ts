import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  authStatus = true;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.authService.authenticationResponse
      .subscribe(
        (status: boolean) => {
          this.authStatus = status;
        }
      );
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  onSignin(form: NgForm) {
    const email = 'root.gregory@gmail.com';
    const password = form.value.passphrase;
    // Should be yeswearestoked
    this.authService.signinUser(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
