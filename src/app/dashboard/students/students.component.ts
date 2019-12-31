import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteStudentDialogComponent } from './delete-student-dialog/delete-dialog.component';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  allStudents = [];

  constructor(
    private students: StudentsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.students.getStudents().subscribe(
      students => {

        // Turn Object to Array to be used with Behvavior Subject
        const studentsArray = Object.values(students);
        this.students.studentsSubject.next(studentsArray);

        // Subscribe to Jobs Subject in Jobs Service for Real time update changes
        this.students.studentsSubject.subscribe(data => {
          this.allStudents = data;
          console.log(this.allStudents);
         });
      });
  }

  openDeleteDialog(student) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      id: student._id,
      fullName: student.fullName
  };

    this.dialog.open(DeleteStudentDialogComponent, dialogConfig);
  }

  openEditDialog(data) {
    console.log(data);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      fullName: data.fullName,
      id: data._id,
      addressOne: data.addressOne,
      addressTwo: data.addressTwo,
      phone: data.phone,
      city: data.city,
      state: data.state,
      zip: data.zip,
      gender: data.gender,
      dob: data.dob,
      school: data.school,
      grade: data.grade,
      email: data.email
  };

    this.dialog.open(EditStudentDialogComponent, dialogConfig);

  }

}
