import { Component, OnInit, Inject } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss']
})
export class EditStudentDialogComponent implements OnInit {
  editStudentForm: FormGroup;
  fullName: string;
  id: string;
  addressOne: string;
  addressTwo: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  dob: string;
  gender: string;
  school: string;
  grade: string;
  profilePicture: string;
  email: string;

  constructor(
    private students: StudentsService,
    private dialogRef: MatDialogRef<EditStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder) {
      this.id = data.id;
      this.fullName = data.fullName;
      this.addressOne = data.addressOne;
      this.addressTwo = data.addressTwo;
      this.phone = data.phone;
      this.city = data.city;
      this.state = data.state;
      this.zip = data.zip;
      this.dob = data.dob;
      this.gender = data.gender;
      this.school = data.school;
      this.grade = data.grade;
      this.email = data.email;
      this.profilePicture = data.profilePicture;
     }

  ngOnInit() {
    this.editStudentForm = this.formBuilder.group({
      fullName: [this.fullName, Validators.required],
      email: [this.email, Validators.required],
      addressOne: [this.addressOne, [Validators.required, Validators.email]],
      addressTwo: [this.addressTwo, Validators.required],
      phone: [this.phone, Validators.required],
      city: [this.city, Validators.required],
      state: [this.state, Validators.required],
      zip: [this.zip, Validators.required],
      gender: [this.gender, [Validators.required, Validators.email]],
      dob: [this.dob, Validators.required],
      school: [this.school, Validators.required],
      grade: [this.grade, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  update(student) {
    student.id = this.id;
    this.students.editStudent(student).subscribe(data => {
      this.students.getStudents().subscribe( data => {
        const jobsArray = Object.values(data);
        this.students.studentsSubject.next(jobsArray);
      });
    });
    this.dialogRef.close();
  }

}
