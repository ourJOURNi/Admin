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
  address: string;
  date: string;
  time: string;
  city: string;
  state: string;
  zip: string;
  summary: string;
  dateCreated: string;
  photo: string;
  isoDate: string;

  constructor(
    private fairs: FairsService,
    private dialogRef: MatDialogRef<EditFairDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder) {

      this.id = data.id;
      this.title = data.title;
      this.address = data.address;
      this.city = data.city;
      this.state = data.state;
      this.summary = data.summary;
      this.zip = data.zip;
      this.date = data.date;
      this.dateCreated = data.dateCreated;
      this.time = data.time;
      this.isoDate = new Date(data.date + ' ' + data.time).toISOString().substring(0, 21);
     }

  ngOnInit() {
    console.log(this.date);
    console.log(this.time);
    console.log(this.isoDate);

    this.editFairForm = this.formBuilder.group({
      title: [this.title, Validators.required],
      address: [this.address, Validators.required],
      city: [this.city, Validators.required],
      state: [this.state, Validators.required],
      zip: [ this.zip, Validators.required],
      date: [ this.isoDate, Validators.required],
      summary: [ this.summary, Validators.required],
     });
  }

  close() {
    this.dialogRef.close();
  }

  update(fair) {
    console.log(fair);
    fair._id = this.id;

    this.fairs.updateFair(fair).subscribe(data => {
      this.fairs.getFairs().subscribe(fairs => {
        const fairsArray = Object.values(fairs);

        for (const fair of fairsArray) {
          fair.date = format( new Date(fair.date), 'MMMM dd, yyyy');
          fair.time = format( new Date(fair.date), 'hh:mm a');
        }

        this.fairs.fairsSubject.next(fairsArray.reverse());
      });
    });
    this.dialogRef.close();
  }

}
