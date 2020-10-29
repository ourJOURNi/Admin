import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-add-student-slot-dialog',
  templateUrl: './add-student-slot-dialog.component.html',
  styleUrls: ['./add-student-slot-dialog.component.scss']
})
export class AddStudentSlotDialogComponent implements OnInit {
  addAgendaItemForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddStudentSlotDialogComponent>) { }

  ngOnInit() {
    this.addAgendaItemForm = this.formBuilder.group({
      time: ['Tech Fair', Validators.required],
      amOrPm: ['Tech Fair', Validators.required],
      title: ['Tech Fair', Validators.required],
    });
  }

  addStudentAgendaItem() {
    console.log('Attempting to add Student Agenda item');

  }

  amOrPm(event) {
    console.log(event);

  }

  close() {
    this.dialogRef.close();
  }

}
