import { Component, OnInit, Inject } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  title: string;
  id: string;

  constructor(
    private jobs: JobsService,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title;
    this.id = data.id;
   }

  ngOnInit() {
  }

  delete(id) {
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
