import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogisticsComponent } from './logistics.component';
import { LogisticsRoutingModule } from './logistics-routing.module';

@NgModule({
  declarations: [
    LogisticsComponent
  ],
  imports: [
    CommonModule,
    LogisticsRoutingModule
  ]
})
export class LogisticsModule {}
