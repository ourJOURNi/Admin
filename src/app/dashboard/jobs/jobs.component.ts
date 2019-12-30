import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';
import { AddJobDialogComponent } from '../../components/add-job-dialog/add-job-dialog.component';
import { EditJobDialogComponent } from '../../components/edit-job-dialog/edit-job-dialog.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  allJobs: any;
  dashJobs = new BehaviorSubject(this.allJobs);


  constructor(
    private jobs: JobsService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.jobs.getJobs().subscribe(jobs => {
      this.allJobs = Object.values(jobs);
    });
  }

  openDeleteDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      id: data._id,
      title: data.title
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
