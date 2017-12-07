import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistryComponent } from './registry.component';

const registryRoutes: Routes = [
  { path: '', component: RegistryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(registryRoutes)
  ],
  exports: [RouterModule]
})
export class RegistryRoutingModule {}
