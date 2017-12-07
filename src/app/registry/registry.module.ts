import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegistryComponent } from './registry.component';
import { RegistryRoutingModule } from './registry-routing.module';


@NgModule({
  declarations: [
    RegistryComponent
  ],
  imports: [
    CommonModule,
    RegistryRoutingModule
  ]
})
export class RegistryModule {}
