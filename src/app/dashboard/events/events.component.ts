import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteEventDialogComponent } from '../events/delete-event-dialog/delete-event-dialog.component';
import { AddEventDialogComponent } from '../events/add-event-dialog/add-event-dialog.component';
import { EditEventDialogComponent } from '../events/edit-event-dialog/edit-event-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  allEvents = [];

  constructor(
    private events: EventsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.events.getEvents().subscribe(events => {

      const eventsArray = Object.values(events);
      this.events.eventsSubject.next(eventsArray);

      // Subscribe to Jobs Subject in Jobs Service for Real time update changes
      this.events.eventsSubject.subscribe(data => {
        this.allEvents = data;
        console.log(this.allEvents);
      });
    });
  }

  openDeleteDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      id: data._id,
      title: data.title,
      organizer: data.organizer,
      location: data.location,
      date: data.date,
      description: data.description,
      photo: data.photo
  };

    this.dialog.open(DeleteEventDialogComponent, dialogConfig);
  }

  openAddEventsDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    this.dialog.open(AddEventDialogComponent, dialogConfig);

  }

  openEditEventDialog(data) {
    console.log(data);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      id: data._id,
      title: data.title,
      organizer: data.organizer,
      location: data.location,
      date: data.date,
      description: data.description,
      photo: data.photo
  };

    this.dialog.open(EditEventDialogComponent, dialogConfig);

  }
}
