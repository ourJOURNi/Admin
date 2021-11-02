import { Component, OnInit, Inject } from '@angular/core';
import { JobsService } from '../../../services/jobs.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  id: string;
  title: string;
  companyName: string;
  companyEmail: string;
  summary: string;
  fullJobDescription: string;
  rateOfPay: string;

  constructor(
    private jobs: JobsService,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.title = data.title;
    this.id = data.id;
    this.companyName = data.companyName;
    this.companyEmail = data.companyEmail;
    this.summary = data.summary;
    this.fullJobDescription = data.fullJobDescription;
    this.rateOfPay = data.rateOfPay;
   }

  ngOnInit() {
  }

  delete(id) {
    console.log('Deleting job...');
    this.jobs.deleteJob(id).subscribe(data => {
      this.jobs.getJobs().subscribe(data => {
        let jobsArray = Object.values(data);
        this.jobs.jobsSubject.next(jobsArray);
      });
    });
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
