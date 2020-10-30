import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FairsService } from 'src/app/services/fairs.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-add-volunteer-faq-dialog',
  templateUrl: './add-volunteer-faq-dialog.component.html',
  styleUrls: ['./add-volunteer-faq-dialog.component.scss']
})
export class AddVolunteerFaqDialogComponent implements OnInit {
  addVolunteerFAQForm: FormGroup;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddVolunteerFaqDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.id = data.id; }

  ngOnInit() {
    this.addVolunteerFAQForm = this.formBuilder.group({
      question: [''],
      answer: [''],
    });
  }

  submitFAQ(id) {
    console.log('Attempting to add volunteer FAQ');
    let question = this.addVolunteerFAQForm.get('question').value;
    let answer = this.addVolunteerFAQForm.get('answer').value;
    console.log(question);
    console.log(answer);
    console.log(id);


    this.fairs.addVolunteerFAQ(id, question, answer)
    .subscribe(
      data => {
        this.fairs.volunteerFAQ$.next(Object.values(data));
        this.openSnackBarSuccess();
        this.close();
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

  openSnackBarSuccess() {
    this.snackBar.open('You have Added a Volunteer', 'Close', {
      duration: 2000,
    });
  }

}
