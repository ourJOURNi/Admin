import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AddEventDialogComponent } from '../events/add-event-dialog/add-event-dialog.component';
import { DeleteEventDialogComponent } from '../events/delete-event-dialog/delete-event-dialog.component';
import { EditEventDialogComponent } from '../events/edit-event-dialog/edit-event-dialog.component';

import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    AddEventDialogComponent, 
    DeleteEventDialogComponent, 
    EditEventDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EventsRoutingModule
  ],
  entryComponents: [
    DeleteEventDialogComponent,
    AddEventDialogComponent,
    EditEventDialogComponent]
})
export class EventsModule { }
