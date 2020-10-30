import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FairsService } from 'src/app/services/fairs.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-volunteer-dialog',
  templateUrl: './add-volunteer-dialog.component.html',
  styleUrls: ['./add-volunteer-dialog.component.scss']
})
export class AddVolunteerDialogComponent implements OnInit {
  addVolunteerForm: FormGroup;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddVolunteerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.id = data.id; }

  ngOnInit() {
    this.addVolunteerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  submitVolunteer(id) {
    console.log('Attempting to add volunteer FAQ');
    let name = this.addVolunteerForm.get('name').value;
    let email = this.addVolunteerForm.get('email').value;
    let phone = this.addVolunteerForm.get('phone').value;
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(id);


    this.fairs.addVolunteer(id, name, email, phone)
    .subscribe(
      data => {
        this.fairs.volunteers$.next(Object.values(data));
        this.close();
        this.openSnackBarSuccess();
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
