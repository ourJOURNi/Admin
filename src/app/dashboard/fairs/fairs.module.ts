import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFairDialogComponent } from './add-fair-dialog/add-fair-dialog.component';
import { DeleteFairsDialogComponent } from './delete-fair-dialog/delete-fair-dialog.component';
import { EditFairDialogComponent } from './edit-fair-dialog/edit-fair-dialog.component';
import { FairsRoutingModule } from './fairs-routing.module';



@NgModule({
  declarations: [
  AddFairDialogComponent,
  DeleteFairsDialogComponent,
  EditFairDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FairsRoutingModule
  ],
  entryComponents: [
    AddFairDialogComponent,
    DeleteFairsDialogComponent,
    EditFairDialogComponent]
})
export class FairsModule { }
