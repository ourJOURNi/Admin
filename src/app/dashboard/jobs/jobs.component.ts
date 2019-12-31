import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteDialogComponent } from '../jobs/delete-dialog/delete-dialog.component';
import { AddJobDialogComponent } from '../jobs/add-job-dialog/add-job-dialog.component';
import { EditJobDialogComponent } from '../jobs/edit-job-dialog/edit-job-dialog.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  allJobs = [];

  constructor(
    private jobs: JobsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.jobs.getJobs().subscribe(jobs => {

      const jobsArray = Object.values(jobs);
      this.jobs.jobsSubject.next(jobsArray);

      // Subscribe to Jobs Subject in Jobs Service for Real time update changes
      this.jobs.jobsSubject.subscribe(data => {
        this.allJobs = data;
        console.log(this.allJobs);
      });
    });
  }

  openDeleteDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      id: data._id,
      title: data.title,
      companyName: data.companyName,
      companyEmail: data.companyEmail,
      summary: data.summary,
      fullJobDescription: data.fullJobDescription,
      rateOfPay: data.rateOfPay
  };

    this.dialog.open(DeleteDialogComponent, dialogConfig);
  }

  openAddJobDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    this.dialog.open(AddJobDialogComponent, dialogConfig);

  }

  openEditDialog(data) {
    console.log(data);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      id: data._id,
      title: data.title,
      companyName: data.companyName,
      companyEmail: data.companyEmail,
      summary: data.summary,
      fullJobDescription: data.fullJobDescription,
      rateOfPay: data.rateOfPay,
  };

    this.dialog.open(EditJobDialogComponent, dialogConfig);

  }

}
