import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportedComponent } from '../posts/reported/reported.component';
import { VerifyComponent } from '../posts/verify/verify.component';

const routes: Routes = [
  { path: 'posts', loadChildren: () => import('./posts.module').then(m => m.PostsModule) },
  { path: 'verify', component: VerifyComponent },
  { path: 'reported', component: ReportedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
