import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';
import { FairsComponent } from '../fairs.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'fairs', component: FairsComponent, outlet: 'open'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FairPageRoutingModule { }
