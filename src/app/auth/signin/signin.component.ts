import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('passphraseInput') input: ElementRef;
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

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  onSignin(form: NgForm) {
    const email = 'root.gregory@gmail.com';
    const password = form.value.passphrase;
    this.authService.signinUser(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
