import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotosComponent } from './photos.component';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule {}
