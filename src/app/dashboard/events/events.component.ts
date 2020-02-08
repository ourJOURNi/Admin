import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteEventDialogComponent } from '../events/delete-event-dialog/delete-event-dialog.component';
import { AddEventDialogComponent } from '../events/add-event-dialog/add-event-dialog.component';
import { EditEventDialogComponent } from '../events/edit-event-dialog/edit-event-dialog.component';
import { format } from 'date-fns';


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
    this.events.getEvents().subscribe(
      events => {
      const eventsArray = Object.values(events);
      console.log(eventsArray);

      for (const event of eventsArray) {
        event.date = format( new Date(event.date), 'MMMM dd, yyyy');
        event.time = format( new Date(event.date), 'hh:mm a');
      }

      this.events.eventsSubject.next(eventsArray.reverse());

      // Subscribe to Events Subject in Events Service for Real time update changes
      this.events.eventsSubject.subscribe(data => {
        this.allEvents = data.reverse();
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
      addressOne: data.addressOne,
      addressTwo: data.addressTwo,
      city: data.city,
      state: data.state,
      zip: data.zip,
      description: data.description,
      date: data.date,
      time: data.time,
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
      addressOne: data.addressOne,
      addressTwo: data.addressTwo,
      city: data.city,
      state: data.state,
      zip: data.zip,
      description: data.description,
      date: data.date,
      time: data.time,
      photo: data.photo
  };

    this.dialog.open(EditEventDialogComponent, dialogConfig);

  }
}
