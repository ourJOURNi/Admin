import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';

const routes: Routes = [
  { path: 'jobs', component: JobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
