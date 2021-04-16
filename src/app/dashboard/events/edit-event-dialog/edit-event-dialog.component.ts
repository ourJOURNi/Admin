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
  formData: FormData;

  uploadedLogoURL;
  photoUploaded = true;

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
  photo: any;
  isoDate: string;

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
      this.uploadedLogoURL = data.photo;
      this.photo = data.photo;
      this.isoDate = new Date(data.date + ' ' + data.time).toISOString().substring(0, 21);
     }

  ngOnInit() {
    this.editEventForm = this.formBuilder.group({
      title: [this.title, Validators.required],
      organizer: [this.organizer, Validators.required],
      addressOne: [this.addressOne, Validators.required],
      addressTwo: [this.addressTwo, Validators.required],
      city: [ this.city, Validators.required],
      state: [ this.state, Validators.required],
      zip: [ this.zip, Validators.required],
      date: [ this.isoDate, Validators.required],
      description: [ this.description, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }
  getFormData(event) {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if (form.id === 'edit-event-form') {
        console.log('Got form: ', form);
        this.formData = new FormData(form);
        console.log('Form data: ', this.formData);
        this.photoUploaded = true;
      }
    });

    let reader = new FileReader();

    if (formElement) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.addEventListener('load', () => {
      // Convert image file ot base64 string
      this.uploadedLogoURL = reader.result;
    }, false);
  }
  update(event) {
    event._id = this.id;
    console.log(event);
    if(!this.formData) {
      console.log('There was no FormData!');
      event.photo = this.uploadedLogoURL;
      this.events.updateEvent(event).subscribe(data => {
        this.events.getEvents().subscribe(data => {
          console.log(data);
          let eventsArray = Object.values(data).reverse();
          this.events.eventsSubject.next(eventsArray);
        });
      });
    } else {
      this.events.uploadPhoto(this.formData).subscribe(data => {
        console.log('Photo upload result: ', data);
        console.log('Photo upload done');
        event.photo = data['objectUrl'];

        console.log('Adding event...');
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
      });
    }
    this.dialogRef.close();
  }

}
