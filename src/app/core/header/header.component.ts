import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobileStatus = false;
  windowWitdth: number;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.windowWitdth = window.innerWidth;
    console.log(this.windowWitdth);
    this.setMobileStatus(event);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWitdth = event.target.innerWidth;
    this.setMobileStatus(this.windowWitdth);
  }

  setMobileStatus(width) {
    if (this.windowWitdth < 700) {
      this.mobileStatus = true;
    }
    if (this.windowWitdth > 700) {
      this.mobileStatus = false;
    }
  }

  checkAuthentication() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

}
