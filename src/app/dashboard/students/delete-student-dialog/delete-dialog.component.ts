import { Component, OnInit, Inject } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteStudentDialogComponent implements OnInit {
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
    private dialogRef: MatDialogRef<DeleteStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.fullName = data.fullName;
    this.id = data.id;
    this.addressOne = data.addressOne;
    this.addressTwo = data.addressTwo;
    this.phone = data.phone;
    this.city = data.city;
    this.state = data.state;
    this.zip = data.zip;
    this.gender = data.gender;
    this.dob = data.dob;
    this.school = data.school;
    this.grade = data.grade;
    this.email = data.email;
   }

  ngOnInit() {
  }

  delete(id) {
    this.students.deleteStudent(id).subscribe(data => {
      this.students.getStudents().subscribe(data => {
        const jobsArray = Object.values(data);
        this.students.studentsSubject.next(jobsArray);
      });
    });
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
