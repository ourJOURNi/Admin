import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FairsService } from 'src/app/services/fairs.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-add-partner-faq-dialog',
  templateUrl: './add-partner-faq-dialog.component.html',
  styleUrls: ['./add-partner-faq-dialog.component.scss']
})
export class AddPartnerFaqDialogComponent implements OnInit {
  addPartnerFAQForm: FormGroup;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddPartnerFaqDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.id = data.id; }

  ngOnInit() {
    this.addPartnerFAQForm = this.formBuilder.group({
      question: [''],
      answer: [''],
    });
  }

  submitFAQ(id) {
    console.log('Attempting to add Partner FAQ');
    let question = this.addPartnerFAQForm.get('question').value;
    let answer = this.addPartnerFAQForm.get('answer').value;
    console.log(question);
    console.log(answer);
    console.log(id);


    this.fairs.addPartnerFAQ(id, question, answer)
    .subscribe(
      data => {
        this.fairs.partnerFAQ$.next(Object.values(data));
        this.close();
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

  openSnackBarSuccess() {
    this.snackBar.open('You have Added a Partner FAQ', 'Close', {
      duration: 2000,
    });
  }

}
