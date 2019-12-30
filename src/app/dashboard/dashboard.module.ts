import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentsComponent } from './students/students.component';
import { MentorsComponent } from './mentors/mentors.component';
import { PostsComponent } from './posts/posts.component';
import { EventsComponent } from './events/events.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsModule } from './jobs/jobs.module';


@NgModule({
  declarations: [
    JobsComponent,
    LogoutComponent,
    DashboardComponent,
    StudentsComponent,
    MentorsComponent,
    PostsComponent,
    EventsComponent
      ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    JobsModule
  ]
})
export class DashboardModule { }
