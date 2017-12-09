import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamburgerStatus = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  toggleHamburger() {
    this.hamburgerStatus = !this.hamburgerStatus;
    console.log(this.hamburgerStatus);
  }

  checkAuthentication() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

}
