import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './dashboard/jobs/jobs.component';
import { StudentsComponent } from './dashboard/students/students.component';
import { MentorsComponent } from './dashboard/mentors/mentors.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { EventsComponent } from './dashboard/events/events.component';
import { LogoutComponent } from './dashboard/logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportedComponent } from './dashboard/posts/reported/reported.component';
import { ReportedArchiveComponent } from './dashboard/posts/reported/reported-archive/reported-archive.component';
import { VerifyComponent } from './dashboard/posts/verify/verify.component';
import { DeniedComponent } from './dashboard/posts/verify/denied/denied.component';


const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: PostsComponent, outlet: 'open'},
    { path: 'jobs', component: JobsComponent, outlet: 'open'},
    { path: 'students', component: StudentsComponent,  outlet: 'open' },
    { path: 'mentors', component: MentorsComponent,  outlet: 'open' },
    { path: 'posts', component: PostsComponent,  outlet: 'open'},
    { path: 'reported', component: ReportedComponent, outlet: 'open'},
    { path: 'reported-arhive', component: ReportedArchiveComponent, outlet: 'open'},
    { path: 'verify', component: VerifyComponent, outlet: 'open'},
    { path: 'denied', component: DeniedComponent, outlet: 'open'},
    { path: 'events', component: EventsComponent,  outlet: 'open' },
    { path: 'logout', component: LogoutComponent,  outlet: 'open' }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
