import { Component, OnInit, Inject } from '@angular/core';
import { JobsService } from '../../../services/jobs.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-job-dialog',
  templateUrl: './edit-job-dialog.component.html',
  styleUrls: ['./edit-job-dialog.component.scss']
})
export class EditJobDialogComponent implements OnInit {

  editJobForm: FormGroup;

  id: string;
  title: string;
  companyName: string;
  companyEmail: string;
  summary: string;
  fullJobDescription: string;
  rateOfPay: number;

  constructor(
    private jobs: JobsService,
    private dialogRef: MatDialogRef<EditJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder) {
      this.id = data.id;
      this.title = data.title;
      this.companyName = data.companyName;
      this.companyEmail = data.companyEmail;
      this.summary = data.summary;
      this.fullJobDescription = data.fullJobDescription;
      this.rateOfPay = data.rateOfPay;
     }

  ngOnInit() {
    this.editJobForm = this.formBuilder.group({
      title: [this.title, Validators.required],
      companyName: [this.companyName, Validators.required],
      companyEmail: [this.companyEmail, [Validators.required, Validators.email]],
      summary: [this.summary, Validators.required],
      fullJobDescription: [this.fullJobDescription, Validators.required],
      rateOfPay: [this.rateOfPay, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  update(job) {
    job._id = this.id;
    this.jobs.updateJob(job).subscribe(data => {
      this.jobs.getJobs().subscribe(data => {
        let jobsArray = Object.values(data);
        this.jobs.jobsSubject.next(jobsArray);
      });
    });
    this.dialogRef.close();
  }

}
