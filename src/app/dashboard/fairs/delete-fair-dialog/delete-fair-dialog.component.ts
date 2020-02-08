import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FairsService } from '../../../services/fairs.service';
import { format } from 'date-fns';


@Component({
  selector: 'app-delete-fair-dialog',
  templateUrl: './delete-fair-dialog.component.html',
  styleUrls: ['./delete-fair-dialog.component.scss']
})
export class DeleteFairsDialogComponent implements OnInit {

  id: string;
  title: string;
  date: string;
  time: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  description: string;
  summary: string;
  dateCreated: string;
  photo: string;

  constructor(
    private fairs: FairsService,
    private dialogRef: MatDialogRef<DeleteFairsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.id = data.id;
      this.title = data.title;
      this.date = data.date;
      this.address = data.address;
      this.city = data.city;
      this.state = data.state;
      this.zip = data.zip;
      this.dateCreated = data.dateCreated;
      this.description = data.description;
      this.photo = data.photo;
    }

  ngOnInit() {
  }

  delete(id) {
    this.fairs.deleteFair(id).subscribe(data => {
      this.fairs.getFairs().subscribe(fairs => {
        const fairsArray = Object.values(fairs);

        for (const event of fairsArray) {
          event.date = format( new Date(event.date), 'MMMM dd, yyyy');
          event.time = format( new Date(event.date), 'hh:mm a');
        }

        this.fairs.fairsSubject.next(fairsArray.reverse());
        this.dialogRef.close();

      });
    });
  }

  close() {
    this.dialogRef.close();
  }

}
