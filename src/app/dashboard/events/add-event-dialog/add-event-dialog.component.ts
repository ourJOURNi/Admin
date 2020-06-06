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

  constructor(
    private events: EventsService,
    private dialogRef: MatDialogRef<AddEventDialogComponent>,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.addEventForm = this.formBuilder.group({
        title: ['Youth Tech Exploration', Validators.required, Validators.maxLength(80)],
        organizer: ['Journi', Validators.required],
        addressOne: ['777 Main', Validators.required],
        addressTwo: ['', Validators.required],
        city: ['Detroit', Validators.required],
        state: ['MI', Validators.required],
        zip: ['48202', Validators.required],
        date: ['', Validators.required],
        time: ['', Validators.required],
        description: ['description', Validators.required],
        photo: ['photo', Validators.required],
      });
    }

    add(event) {
      console.log('Adding event...');
      event.datedCreated = Date.now();
      this.events.addEvent(event).subscribe(data => {
        this.events.getEvents().subscribe(events => {
          const eventsArray = Object.values(events);

          for (const event of eventsArray) {
            event.date = format( new Date(event.date), 'MMMM dd, yyyy');
            event.time = format( new Date(event.date), 'hh:mm a');
          }
          this.events.eventsSubject.next(eventsArray.reverse());
          this.dialogRef.close();
        });
      });
    }

    close() {
      this.dialogRef.close();
    }

}
