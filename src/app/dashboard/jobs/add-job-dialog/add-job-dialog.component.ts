import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../services/jobs.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-job-dialog',
  templateUrl: './add-job-dialog.component.html',
  styleUrls: ['./add-job-dialog.component.scss']
})
export class AddJobDialogComponent implements OnInit {

  addJobForm: FormGroup;

  formData: FormData;
  logoUploaded = false;
  uploadedLogoURL;

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
      companyLogo: [],
      summary: ['this is a summary', Validators.required],
      fullJobDescription: ['this is a full description of the job', Validators.required],
      rateOfPay: ['10', Validators.required],
    });
  }

  getFormData(event) {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if (form.id === 'add-job-form') {
        console.log('Got form: ', form);
        this.formData = new FormData(form);
        console.log('Form data: ', this.formData);
        this.logoUploaded = true;
      }
    });
    
    let reader = new FileReader();

    if (formElement) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.addEventListener('load', () => {
      // Convert image file to base64 string
      this.uploadedLogoURL = reader.result;
    }, false);
  }

  add(job) {
    if (this.logoUploaded) {
      // Add job /w logo
      this.jobs.uploadLogo(this.formData).subscribe(data => {
        console.log('Logo upload result: ', data);
        console.log('Logo upload done');
        this.uploadedLogoURL = data['objectUrl'];

        console.log('Adding job...');
        console.log(job);
        this.jobs.addJob(job, this.uploadedLogoURL).subscribe(data => {
          this.jobs.getJobs().subscribe(data => {
            let jobsArray = Object.values(data).reverse();
            this.jobs.jobsSubject.next(jobsArray);
          });
        });
      });
    } else {
      // Add job without logo 
      console.log('Adding job...');
      console.log(job);
      this.jobs.addJob(job, null).subscribe(data => {
        this.jobs.getJobs().subscribe(data => {
          let jobsArray = Object.values(data).reverse();
          this.jobs.jobsSubject.next(jobsArray);
        });
      });
    }
      
    this.close()
  }

  close() {
    this.dialogRef.close();
  }

}
