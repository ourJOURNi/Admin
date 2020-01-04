import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { EditMentorDialogComponent } from '../mentors/edit-mentor-dialog/edit-mentor-dialog.component';
import { AddMentorDialogComponent } from '../mentors/add-mentor-dialog/add-mentor-dialog.component';
import { DeleteMentorDialogComponent } from '../mentors/delete-mentor-dialog/delete-mentor-dialog.component';

import { MentorsRoutingModule } from './mentors-routing.module';


@NgModule({
  declarations: [
    EditMentorDialogComponent, 
    AddMentorDialogComponent, 
    DeleteMentorDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MentorsRoutingModule
  ],
  entryComponents: [
    DeleteMentorDialogComponent,
    AddMentorDialogComponent,
    EditMentorDialogComponent]
})
export class MentorsModule { }
