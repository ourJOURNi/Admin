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
  companyLogo: string;
  summary: string;
  fullJobDescription: string;
  rateOfPay: number;

  formData: FormData;
  uploadedLogoURL;
  logoUploaded = false;

  constructor(
    private jobs: JobsService,
    private dialogRef: MatDialogRef<EditJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder) {
      this.id = data.id;
      this.title = data.title;
      this.companyName = data.companyName;
      this.companyEmail = data.companyEmail;
      this.uploadedLogoURL = data.companyLogo;
      this.companyLogo = data.companyLogo;
      this.summary = data.summary;
      this.fullJobDescription = data.fullJobDescription;
      this.rateOfPay = data.rateOfPay;
     }

  ngOnInit() {

    // TODO: Get current logo, if any, from selected job
    // TODO: Also get current pictures from mentors and events from their respective pages

    this.editJobForm = this.formBuilder.group({
      title: [this.title, Validators.required],
      companyName: [this.companyName, Validators.required],
      companyEmail: [this.companyEmail, [Validators.required, Validators.email]],
      companyLogo: [],
      summary: [this.summary, Validators.required],
      fullJobDescription: [this.fullJobDescription, Validators.required],
      rateOfPay: [this.rateOfPay, Validators.required],
    });
  }

  getFormData(event) {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if (form.id === 'edit-job-form') {
        console.log('Got form: ', form);
        this.formData = new FormData(form);
        this.logoUploaded = true
      }
    });

    let reader = new FileReader();
    reader.addEventListener("load", () => {
      // Convert image file to base64 string
      this.uploadedLogoURL = reader.result;
    }, false);

    if (formElement) {
      reader.readAsDataURL(event.target.files[0]);
    }

  }

  close() {
    this.dialogRef.close();
  }
  update(job) {
    job._id = this.id;
    console.log(job);
    if(!this.formData) {
      console.log('There was no FormData!');
      job.companyLogo = this.uploadedLogoURL;
      this.jobs.updateJob(job).subscribe(data => {
        this.jobs.getJobs().subscribe(data => {
          console.log(data);
          let jobsArray = Object.values(data).reverse();
          this.jobs.jobsSubject.next(jobsArray);
        });
      });
    } else {
      this.jobs.uploadLogo(this.formData).subscribe(data => {
        console.log('Logo upload result: ', data);
        console.log('Logo upload done');
        job.companyLogo = data['objectUrl'];

        console.log('Adding job...');
        this.jobs.updateJob(job).subscribe(data => {
          this.jobs.getJobs().subscribe(data => {
            console.log(data);
            let jobsArray = Object.values(data).reverse();
            this.jobs.jobsSubject.next(jobsArray);
          });
        });
      });
    }
    this.dialogRef.close();
  }

}
