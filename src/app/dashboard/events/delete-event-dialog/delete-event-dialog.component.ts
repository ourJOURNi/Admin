import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-delete-event-dialog',
  templateUrl: './delete-event-dialog.component.html',
  styleUrls: ['./delete-event-dialog.component.scss']
})
export class DeleteEventDialogComponent implements OnInit {

  id: string;
  title: string;
  organizer: string;
  location: string;
  date: string;
  description: string;
  dateCreated: string;
  photo: string;

  constructor(
    private events: EventsService,
    private dialogRef: MatDialogRef<DeleteEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.id = data.id;
      this.title = data.title;
      this.organizer = data.organizer;
      this.location = data.location;
      this.date = data.date;
      this.description = data.description;
      this.photo = data.photo;
    }

  ngOnInit() {
  }

  delete(id) {
    this.events.deleteEvent(id).subscribe(data => {
      this.events.getEvents().subscribe(data => {
        let eventsArray = Object.values(data);
        this.events.eventsSubject.next(eventsArray);
      });
    });
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
