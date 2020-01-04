import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from '../../../services/events.service';


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
        title: ['Event 3000', Validators.required],
        organizer: ['Eddie Taliaferro', Validators.required],
        location: ['Detroit, MI, 48228', [Validators.required, Validators.email]],
        date: ['lololol', Validators.required],
        description: ['this is a description of the event', Validators.required],
        photo: ['lol', Validators.required],
      });
    }

    add(event) {
      console.log('Adding event...');
      event.datedCreated = Date.now();
      this.events.addEvent(event).subscribe(data => {
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
