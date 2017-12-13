import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './../app-routing.module';

import { AuthGuard } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { RsvpService } from './../rsvp/rsvp.service';
import { DataStorageService } from './../shared/data-storage.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    // Need to export this bc always need your root routes in the app module
    AppRoutingModule,
    // Need to export header bc used in app.component.html
    HeaderComponent
  ],
  providers: [
    // Angular will load one instance of all of these for the app as long as this core module is loaded eagerly
    AuthService,
    AuthGuard,
    RsvpService,
    DataStorageService
  ]
})
export class CoreModule {}
