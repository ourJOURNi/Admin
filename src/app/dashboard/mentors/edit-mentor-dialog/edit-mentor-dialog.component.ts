import { Component, OnInit, Inject } from '@angular/core';
import { MentorsService } from '../../../services/mentors.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-mentor-dialog',
  templateUrl: './edit-mentor-dialog.component.html',
  styleUrls: ['./edit-mentor-dialog.component.scss']
})
export class EditMentorDialogComponent implements OnInit {

  editMentorForm: FormGroup;

  id: string;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  title: string;
  description: string;
  photo: string;

  constructor(
    private mentors: MentorsService,
    private dialogRef: MatDialogRef<EditMentorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder
  ) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.address = data.address;
    this.city = data.city;
    this.state = data.state;
    this.zip = data.zip;
    this.phone = data.phone;
    this.title = data.title;
    this.description = data.description;
    this.photo = data.photo;
  }

  ngOnInit() {
    this.editMentorForm = this.formBuilder.group({
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

  close() {
    this.dialogRef.close();
  }

  update(mentor) {
    mentor._id = this.id;
    this.mentors.updateMentor(mentor).subscribe(data => {
      this.mentors.getMentors().subscribe(data => {
        let mentorsArray = Object.values(data);
        this.mentors.mentorsSubject.next(mentorsArray);
      });
    });
    this.dialogRef.close();
  }

}
