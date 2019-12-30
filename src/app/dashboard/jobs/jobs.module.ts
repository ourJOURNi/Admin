import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';
import { AddJobDialogComponent } from '../../components/add-job-dialog/add-job-dialog.component';
import { EditJobDialogComponent } from '../../components/edit-job-dialog/edit-job-dialog.component';

import { JobRoutingModule } from './jobs-routing.module';

@NgModule({
  declarations: [
    DeleteDialogComponent,
    AddJobDialogComponent,
    EditJobDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    JobRoutingModule
  ],
  entryComponents: [
    DeleteDialogComponent,
    AddJobDialogComponent,
    EditJobDialogComponent]
})
export class JobsModule { }
