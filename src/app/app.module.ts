import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
// import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    // All other components are in their respective feature modules and are loaded when their route is activated
    AppComponent,
  ],
  imports: [
    // This animations module is used by the Angular2ImageGalleryModule, and conflicts with the standard BrowserModule (it overrides it)
    BrowserAnimationsModule,
    // BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    Angular2ImageGalleryModule
  ],
  // Providers are all stored in the core module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
