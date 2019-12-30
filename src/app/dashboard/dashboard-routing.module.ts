import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { StudentsComponent } from './students/students.component';
import { MentorsComponent } from './mentors/mentors.component';
import { PostsComponent } from './posts/posts.component';
import { EventsComponent } from './events/events.component';
import { LogoutComponent } from './logout/logout.component';
import { JobsModule } from './jobs/jobs.module';


const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: JobsComponent, outlet: 'dashboardPages'}
  ] }
  // { path: 'students', component: StudentsComponent },
  // { path: 'mentors', component: MentorsComponent },
  // { path: 'posts', component: PostsComponent },
  // { path: 'events', component: EventsComponent },
  // { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    JobsModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
