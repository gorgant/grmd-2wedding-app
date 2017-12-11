import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogisticsComponent } from './logistics.component';

const logisticsRoutes: Routes = [
  { path: '', component: LogisticsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(logisticsRoutes)
  ],
  exports: [RouterModule]
})
export class LogisticsRoutingModule {}
