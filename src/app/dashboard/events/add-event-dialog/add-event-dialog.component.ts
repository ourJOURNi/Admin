import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from '../../../services/events.service';
import { format } from 'date-fns';


@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent implements OnInit {

  addEventForm: FormGroup;
  formData: FormData;
  photoUploaded = false;
  uploadedPhotoURL;

  constructor(
    private events: EventsService,
    private dialogRef: MatDialogRef<AddEventDialogComponent>,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.addEventForm = this.formBuilder.group({
        title: ['Youth Tech Exploration', [Validators.required, Validators.maxLength(80)]],
        organizer: ['Journi', Validators.required],
        addressOne: ['777 Main', Validators.required],
        addressTwo: ['', Validators.required],
        city: ['Detroit', Validators.required],
        state: ['MI', Validators.required],
        zip: ['48202', Validators.required],
        date: ['', Validators.required],
        time: ['', Validators.required],
        description: ['description', Validators.required],
        photo: ['', Validators.required]
      });
    }

    getFormData(event) {
      const formElement = document.querySelectorAll('form');
      formElement.forEach(form => {
        if (form.id === 'add-event-form') {
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
        this.uploadedPhotoURL = reader.result;
      }, false);
    }

    add(event) {
      this.events.uploadPhoto(this.formData).subscribe(data => {
        console.log('Photo upload result: ', data);
        console.log('Photo upload done');
        this.uploadedPhotoURL = data['objectUrl'];

        console.log('Adding event...');
        event.datedCreated = Date.now();
        this.events.addEvent(event, this.uploadedPhotoURL).subscribe(data => {
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
      this.close();
    }

    close() {
      this.dialogRef.close();
    }

}
