import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { JobsComponent } from './jobs/jobs.component';
import { StudentsComponent } from './students/students.component';
import { MentorsComponent } from './mentors/mentors.component';
import { PostsComponent } from './posts/posts.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    LogoutComponent,
    DashboardComponent,
    JobsComponent,
    StudentsComponent,
    MentorsComponent,
    PostsComponent,
    EventsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
