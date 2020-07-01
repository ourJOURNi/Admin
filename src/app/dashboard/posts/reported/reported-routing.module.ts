import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportedArchiveComponent } from './reported-archive/reported-archive.component';

const routes: Routes = [
  { path: 'reported-archive', component: ReportedArchiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportedRoutingModule { }
