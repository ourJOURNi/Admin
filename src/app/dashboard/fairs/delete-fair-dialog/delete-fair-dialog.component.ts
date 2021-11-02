import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private fairs: FairsService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<DeleteFairsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log(data);
      this.id = data._id;
      this.title = data.title;
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
        this.snackBar.open('You have Deleted this Fair', 'Close', {
          duration: 2000});
        this.dialogRef.close();

      });
    });
  }

  close() {
    this.dialogRef.close();
  }

}
