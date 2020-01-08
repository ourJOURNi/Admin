import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from '../../../services/events.service';


@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrls: ['./edit-event-dialog.component.scss']
})
export class EditEventDialogComponent implements OnInit {

  editEventForm: FormGroup;

  id: string;
  title: string;
  organizer: string;
  location: string;
  date: string;
  description: string;
  photo: string;

  constructor(
    private events: EventsService,
    private dialogRef: MatDialogRef<EditEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder) {

      this.id = data.id;
      this.title = data.title;
      this.organizer = data.organizer;
      this.location = data.location;
      this.date = data.date;
      this.description = data.description;
      this.photo = data.id;
     }

  ngOnInit() {
    this.editEventForm = this.formBuilder.group({
      title: [this.title, Validators.required],
      organizer: [this.organizer, Validators.required],
      location: [this.location, [Validators.required, Validators.email]],
      date: [this.date, Validators.required],
      description: [this.description, Validators.required],
      photo: [this.photo, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  update(event) {
    event._id = this.id;
    this.events.updateEvent(event).subscribe(data => {
      this.events.getEvents().subscribe(data => {
        let eventsArray = Object.values(data);
        this.events.eventsSubject.next(eventsArray);
      });
    });
    this.dialogRef.close();
  }

}
