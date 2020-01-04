import { Component, OnInit } from '@angular/core';
import { MentorsService } from '../../../services/mentors.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-mentor-dialog',
  templateUrl: './add-mentor-dialog.component.html',
  styleUrls: ['./add-mentor-dialog.component.scss']
})
export class AddMentorDialogComponent implements OnInit {
  addMentorForm: FormGroup;

  constructor(
    private mentors: MentorsService,
    private dialogRef: MatDialogRef<AddMentorDialogComponent>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.addMentorForm = this.formBuilder.group({
      name: ['Eddie', Validators.required],
      email: ['eddie@gmail.com', Validators.required],
      address: ['12344 LOL', [Validators.required, Validators.email]],
      city: ['Detroit', Validators.required],
      state: ['MI', Validators.required],
      zip: ['48228', Validators.required],
      phone: ['732237792', Validators.required],
      title: ['Web Dev', Validators.required],
      description: ['LOLOLOLOLOLOLOLO', Validators.required],
      photo: ['No photo', Validators.required],
    });
  }

  add(mentor) {
    console.log('Adding mentor...');
    this.mentors.addMentor(mentor).subscribe(data => {

      this.mentors.getMentors().subscribe(data => {
        let mentorsArray = Object.values(data);
        this.mentors.mentorsSubject.next(mentorsArray);
      });
    });
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
