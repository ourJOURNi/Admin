import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeniedComponent } from './denied/denied.component';

const routes: Routes = [
  { path: 'denied', component: DeniedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyRoutingModule { }
