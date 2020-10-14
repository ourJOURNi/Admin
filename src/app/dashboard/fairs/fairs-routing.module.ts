import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { FairPageComponent } from './fair-page/fair-page.component';
import { FairsComponent } from './fairs.component';

const routes: Routes = [
  { path: 'fair-page/:id', component: FairPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FairsRoutingModule { }
