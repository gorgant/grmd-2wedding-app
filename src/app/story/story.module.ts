import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoryComponent } from './story.component';
import { StoryRoutingModule } from './story-routing.module';

@NgModule({
  declarations: [
    StoryComponent
  ],
  imports: [
    CommonModule,
    StoryRoutingModule
  ]
})
export class StoryModule {}
