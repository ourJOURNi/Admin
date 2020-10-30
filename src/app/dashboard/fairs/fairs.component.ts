import { Component, OnDestroy, OnInit } from '@angular/core';
import { FairsService } from '../../services/fairs.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteFairsDialogComponent } from '../fairs/delete-fair-dialog/delete-fair-dialog.component';
import { AddFairDialogComponent } from '../fairs/add-fair-dialog/add-fair-dialog.component';
import { EditFairDialogComponent } from '../fairs/edit-fair-dialog/edit-fair-dialog.component';
import { format } from 'date-fns';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit, OnDestroy {
  allFairs = [];
  fairsSubscription: Subscription;
  fairsSubject: Subscription;

  constructor(
    public dialog: MatDialog,
    private fairs: FairsService,
    private router: Router
    ) { }

  ngOnDestroy(): void {
    this.fairsSubscription.unsubscribe();
    this.fairsSubject.unsubscribe();
  }

  ngOnInit() {
    this.fairsSubscription = this.fairs.getFairs().subscribe(
      fairs => {
      const fairsArray = Object.values(fairs);
      console.log(fairsArray);

      for (const fair of fairsArray) {
        fair.date = format( new Date(fair.date), 'MMMM dd, yyyy');
        fair.time = format( new Date(fair.date), 'hh:mm a');
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

  openDeleteFairsDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      id: data._id,
      title: data.title,
      organizer: data.organizer,
      addressOne: data.addressOne,
      addressTwo: data.addressTwo,
      city: data.city,
      state: data.state,
      zip: data.zip,
      description: data.description,
      date: data.date,
      time: data.time,
      photo: data.photo
  };

    this.dialog.open(DeleteFairsDialogComponent, dialogConfig);
  }

  openAddFairsDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    this.dialog.open(AddFairDialogComponent, dialogConfig);

  }

  openEditFairDialog(data) {
    console.log(data);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

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
