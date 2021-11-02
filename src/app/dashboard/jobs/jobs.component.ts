import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../jobs/delete-dialog/delete-dialog.component';
import { AddJobDialogComponent } from '../jobs/add-job-dialog/add-job-dialog.component';
import { EditJobDialogComponent } from '../jobs/edit-job-dialog/edit-job-dialog.component';
import { format } from 'date-fns';

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

      const jobsArray = Object.values(jobs).reverse();
      this.jobs.jobsSubject.next(jobsArray);

      // Subscribe to Jobs Subject in Jobs Service for Real time updates
      this.jobs.jobsSubject.subscribe(data => {
        this.allJobs = data;

        for (let job of this.allJobs) {
          job.dateCreated = format( new Date(job.dateCreated), 'MMMM dd, yyyy');
        }
        console.log(this.allJobs);
      });
    });
  }

  openDeleteDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = '400px';
    dialogConfig.data = {
      id: data._id,
  };

    this.dialog.open(DeleteDialogComponent, dialogConfig);
  }

  openAddJobDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = '800px';

    this.dialog.open(AddJobDialogComponent, dialogConfig);

  }

  openEditDialog(data) {
    console.log(data);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = '800px';

    dialogConfig.data = {
      id: data._id,
      title: data.title,
      companyName: data.companyName,
      companyLogo: data.companyLogo,
      companyEmail: data.companyEmail,
      summary: data.summary,
      fullJobDescription: data.fullJobDescription,
      rateOfPay: data.rateOfPay,
  };

    this.dialog.open(EditJobDialogComponent, dialogConfig);

  }

}
