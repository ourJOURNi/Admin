import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'logout', component: LogoutComponent,  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
