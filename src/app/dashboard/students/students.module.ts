import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DeleteStudentDialogComponent } from './delete-student-dialog/delete-dialog.component';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';



@NgModule({
  declarations: [
    EditStudentDialogComponent,
    DeleteStudentDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    EditStudentDialogComponent,
    DeleteStudentDialogComponent]
})
export class StudentsModule { }
