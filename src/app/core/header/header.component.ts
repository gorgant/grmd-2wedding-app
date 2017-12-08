import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamburgerStatus = false;

  constructor() { }

  ngOnInit() {
  }

  toggleHamburger() {
    this.hamburgerStatus = !this.hamburgerStatus;
    console.log(this.hamburgerStatus);
  }

}
