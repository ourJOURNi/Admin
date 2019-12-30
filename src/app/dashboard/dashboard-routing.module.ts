import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
// import { JobsComponent } from './jobs/jobs.component';
import { StudentsComponent } from './students/students.component';
import { MentorsComponent } from './mentors/mentors.component';
import { PostsComponent } from './posts/posts.component';
import { EventsComponent } from './events/events.component';
import { LogoutComponent } from './logout/logout.component';
import { JobsModule } from './jobs/jobs.module';
import { JobsComponent } from './jobs/jobs.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'jobs', component: JobsComponent },
  // {  path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'students', component: StudentsComponent },
  { path: 'mentors', component: MentorsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    JobsModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
