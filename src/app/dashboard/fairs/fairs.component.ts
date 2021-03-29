import { Component, OnDestroy, OnInit } from '@angular/core';
import { FairsService } from '../../services/fairs.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteFairsDialogComponent } from '../fairs/delete-fair-dialog/delete-fair-dialog.component';
import { AddFairDialogComponent } from '../fairs/add-fair-dialog/add-fair-dialog.component';
import { EditFairDialogComponent } from '../fairs/edit-fair-dialog/edit-fair-dialog.component';
import { format } from 'date-fns';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit, OnDestroy {
  id: string;
  allFairs = [];
  fairsSubscription: Subscription;
  fairsSubject: Subscription;

  constructor(
    public dialog: MatDialog,
    private fairs: FairsService,
    private router: Router
    ) { }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.fairsSubscription = this.fairs.getFairs().subscribe(
      fairs => {
      const fairsArray = Object.values(fairs);
      console.log(fairsArray);

      for (const fair of fairsArray) {
        fair.date = format( new Date(fair.date), 'MMMM dd, yyyy');
      }

      this.fairs.fairsSubject.next(fairsArray.reverse());

      // Subscribe to Fairs Subject in Fairs Service for Real time update changes
      this.fairsSubject = this.fairs.fairsSubject.subscribe(data => {
        this.allFairs = data.reverse();
      });
    });
  }

  fairPage(id) {
    this.router.navigate(['fair-page', id]);
  }

  deleteFair(id) {
    console.log('deleting fair');
    const dialogRef = this.dialog.open(DeleteFairsDialogComponent, {
      width: '400px',
      data: {
        _id: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}

  openAddFairsDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = '800px';

    this.dialog.open(AddFairDialogComponent, dialogConfig);

  }

  openEditFairDialog(data) {
    console.log(data);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = '800px';

    dialogConfig.data = {
      id: data._id,
      title: data.title,
      dateCreated: data.dateCreated,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      summary: data.summary,
      description: data.description,
      date: data.date,
      time: data.time,
      photo: data.photo
  };

    this.dialog.open(EditFairDialogComponent, dialogConfig);

  }

}
