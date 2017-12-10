import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { PhotosComponent } from './photos.component';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
  declarations: [
    PhotosComponent,
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    Angular2ImageGalleryModule
  ]
})
export class PhotosModule {}
