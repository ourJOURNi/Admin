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
import { StudentsModule } from './students/students.module';


const routes: Routes = [
  { path: '', component: DashboardComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    JobsModule,
    StudentsModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
