import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-job-dialog',
  templateUrl: './add-job-dialog.component.html',
  styleUrls: ['./add-job-dialog.component.scss']
})
export class AddJobDialogComponent implements OnInit {
  addJobForm: FormGroup;

  constructor(
    private jobs: JobsService,
    private dialogRef: MatDialogRef<AddJobDialogComponent>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.addJobForm = this.formBuilder.group({
      title: ['this is a title', Validators.required],
      companyName: ['company name', Validators.required],
      companyEmail: ['eddie@gmail.com', [Validators.required, Validators.email]],
      summary: ['this is a summary', Validators.required],
      fullJobDescription: ['this is a full description of the job', Validators.required],
      rateOfPay: ['10', Validators.required],
    });
  }

  add(job) {
    console.log('Adding job...');
    job['datedCreated'] = Date.now();
    console.log(job);
    this.jobs.addJob(job).subscribe();
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
