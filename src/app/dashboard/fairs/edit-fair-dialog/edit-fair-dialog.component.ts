import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FairsService } from '../../../services/fairs.service';
import { format } from 'date-fns';



@Component({
  selector: 'app-edit-fair-dialog',
  templateUrl: './edit-fair-dialog.component.html',
  styleUrls: ['./edit-fair-dialog.component.scss']
})
export class EditFairDialogComponent implements OnInit {

  editFairForm: FormGroup;

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
    private fairs: FairsService,
    private dialogRef: MatDialogRef<EditFairDialogComponent>,
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
      this.date = data.date;
      this.time = data.time;
      this.description = data.description;
      this.photo = data.photo;
     }

  ngOnInit() {
    this.editFairForm = this.formBuilder.group({
      title: [this.title, Validators.required],
      organizer: [this.organizer, Validators.required],
      addressOne: [this.addressOne, Validators.required],
      addressTwo: [this.addressTwo, Validators.required],
      city: [ this.city, Validators.required],
      state: [ this.state, Validators.required],
      zip: [ this.zip, Validators.required],
      date: [ this.date, Validators.required],
      time: [ this.time, Validators.required],
      description: [ this.description, Validators.required],
      photo: ['', Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  update(fair) {
    fair._id = this.id;
    this.fairs.updateFair(fair).subscribe(data => {
      this.fairs.getFairs().subscribe(fairs => {
        const eventsArray = Object.values(fairs);

        for (const fair of eventsArray) {
          fair.date = format( new Date(fair.date), 'MMMM-dd-yyyy');
          fair.time = format( new Date(fair.date), 'hh:mm a');
        }

        this.fairs.fairsSubject.next(eventsArray.reverse());
      });
    });
    this.dialogRef.close();
  }

}
