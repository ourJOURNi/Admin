import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from '../../../services/events.service';
import { format } from 'date-fns';

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
  addressOne: string;
  addressTwo: string;
  city: string;
  state: string;
  zip: string;
  date: string;
  time: string;
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
      this.addressOne = data.addressOne;
      this.addressTwo = data.addressTwo;
      this.city = data.city;
      this.state = data.state;
      this.zip = data.zip;
      this.description = data.description;
      this.date = data.date;
      this.time = data.time;
      this.photo = data.photo;
     }

  ngOnInit() {
    this.editEventForm = this.formBuilder.group({
      title: [this.title, Validators.required, Validators.maxLength(80)],
      organizer: [this.organizer, Validators.required],
      addressOne: [this.addressOne, Validators.required],
      addressTwo: [this.addressTwo, Validators.required],
      city: [ this.city, Validators.required],
      state: [ this.state, Validators.required],
      zip: [ this.zip, Validators.required],
      date: [ this.date, Validators.required],
      time: [ this.time, Validators.required],
      description: [ this.description, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  update(event) {
    event._id = this.id;
    this.events.updateEvent(event).subscribe(data => {
      this.events.getEvents().subscribe(events => {
        const eventsArray = Object.values(events);

        for (const event of eventsArray) {
          event.date = format( new Date(event.date), 'MMMM dd, yyyy');
          event.time = format( new Date(event.date), 'hh:mm a');
        }

        this.events.eventsSubject.next(eventsArray.reverse());
      });
    });
    this.dialogRef.close();
  }

}
