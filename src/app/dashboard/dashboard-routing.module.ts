import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', component: LogoutComponent },
  { path: 'logout', component: LogoutComponent, outlet: 'dashboard_pages' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: false })],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
