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
  formData: FormData;
  mentorPhotoUploaded = false;
  uploadedMentorPhotoURL: string | ArrayBuffer;

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
    this.uploadedMentorPhotoURL = data.photo;
  }

  ngOnInit() {
    this.editMentorForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      email: [this.email, Validators.required],
      address: [this.address, [Validators.required, Validators.email]],
      city: [this.city, Validators.required],
      state: [this.state, Validators.required],
      zip: [this.zip, Validators.required],
      phone: [this.phone, Validators.required],
      title: [this.title, Validators.required],
      description: [this.description, Validators.required],
      photo: [''],
    });
  }

  close() {
    this.dialogRef.close();
  }
  getFormData(event) {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if (form.id === 'edit-job-form') {
        console.log('Got form: ', form);
        this.formData = new FormData(form);
        this.mentorPhotoUploaded = true
      }
    });

    let reader = new FileReader();
    reader.addEventListener("load", () => {
      // Convert image file to base64 string
      this.uploadedMentorPhotoURL = reader.result;
    }, false);

    if (formElement) {
      reader.readAsDataURL(event.target.files[0]);
    }

  }

  update(mentor) {
    mentor._id = this.id;
    if(!this.formData) {
      console.log('There was no FormData!');
      mentor.photo = this.uploadedMentorPhotoURL;
      this.mentors.updateMentor(mentor).subscribe(data => {
        this.mentors.getMentors().subscribe(data => {
          let mentorsArray = Object.values(data);
          this.mentors.mentorsSubject.next(mentorsArray);
        });
      });
    }

    this.dialogRef.close();
  }

}
