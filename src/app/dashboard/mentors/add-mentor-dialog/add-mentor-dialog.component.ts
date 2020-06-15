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

  formData: FormData;
  photoUploaded = false;
  uploadedPhotoURL;

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
      photo: ['', Validators.required],
    });
  }

  getFormData(event) {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if (form.id === 'add-mentor-form') {
        console.log('Got form: ', form);
        this.formData = new FormData(form);
        console.log('Form data: ', this.formData);
        this.photoUploaded = true;
      }
    });

    let reader = new FileReader();

    if (formElement) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.addEventListener('load', () => {
      // Convert image file to base64 string
      this.uploadedPhotoURL = reader.result;
    }, false)
  }

  add(mentor) {
    if (this.photoUploaded) {
      // Add mentor /w photo
      this.mentors.uploadPhoto(this.formData).subscribe(data => {
        console.log('Photo upload result: ', data);
        console.log('Photo upload done');
        this.uploadedPhotoURL = data['objectUrl'];
        
        console.log('Adding mentor...');
        console.log(mentor);
        this.mentors.addMentor(mentor, this.uploadedPhotoURL).subscribe(data => {
          this.mentors.getMentors().subscribe(data => {
            let mentorsArray = Object.values(data);
            this.mentors.mentorsSubject.next(mentorsArray);
          });
        });
      });
    } else {
      // Add mentor without logo
      console.log('Adding mentor...');
      console.log(mentor);
      this.mentors.addMentor(mentor, null).subscribe(data => {
        this.mentors.getMentors().subscribe(data => {
          let mentorsArray = Object.values(data);
          this.mentors.mentorsSubject.next(mentorsArray);
        });
      });
    }
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
