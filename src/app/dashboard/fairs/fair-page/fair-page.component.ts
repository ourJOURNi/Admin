import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';
import { FairsService } from 'src/app/services/fairs.service';

import { DeleteSchoolDialogComponent } from './delete-school-dialog/delete-school-dialog.component';
import { PrintDialogComponent } from './print-dialog/print-dialog.component';
import { PrintStudentsDialogComponent } from './print-students-dialog/print-students-dialog.component';
import { AddStudentSlotDialogComponent } from './add-student-slot-dialog/add-student-slot-dialog.component';
import { PrintStudentAgendaDialogComponent } from './print-student-agenda-dialog/print-student-agenda-dialog.component';
import { DeleteStudentSlotDialogComponent } from './delete-student-slot-dialog/delete-student-slot-dialog.component';
import { PrintChaperonesDialogComponent } from './print-chaperones-dialog/print-chaperones-dialog.component';
import { AddChaperoneSlotDialogComponent } from './add-chaperone-slot-dialog/add-chaperone-slot-dialog.component';
import { DeleteChaperoneSlotDialogComponent } from './delete-chaperone-slot-dialog/delete-chaperone-slot-dialog.component';
import { AddPartnerDialogComponent } from './add-partner-dialog/add-partner-dialog.component';
import { PrintPartnersDialogComponent } from './print-partners-dialog/print-partners-dialog.component';
import { DeletePartnerDialogComponent } from './delete-partner-dialog/delete-partner-dialog.component';
import { AddPartnerSlotDialogComponent } from './add-partner-slot-dialog/add-partner-slot-dialog.component';
import { PrintPartnerAgendaDialogComponent } from './print-partner-agenda-dialog/print-partner-agenda-dialog.component';
import { DeletePartnerSlotDialogComponent } from './delete-partner-slot-dialog/delete-partner-slot-dialog.component';
import { AddPartnerFaqDialogComponent } from './add-partner-faq-dialog/add-partner-faq-dialog.component';
import { PrintPartnerFaqDialogComponent } from './print-partner-faq-dialog/print-partner-faq-dialog.component';
import { DeletePartnerFaqDialogComponent } from './delete-partner-faq-dialog/delete-partner-faq-dialog.component';
import { AddVolunteerDialogComponent } from './add-volunteer-dialog/add-volunteer-dialog.component';
import { PrintVolunteersDialogComponent } from './print-volunteers-dialog/print-volunteers-dialog.component';
import { DeleteVolunteerDialogComponent } from './delete-volunteer-dialog/delete-volunteer-dialog.component';
import { AddVolunteerSlotDialogComponent } from './add-volunteer-slot-dialog/add-volunteer-slot-dialog.component';
import { PrintVolunteerAgendaDialogComponent } from './print-volunteer-agenda-dialog/print-volunteer-agenda-dialog.component';
import { AddVolunteerFaqDialogComponent } from './add-volunteer-faq-dialog/add-volunteer-faq-dialog.component';
import { PrintVolunteerFaqDialogComponent } from './print-volunteer-faq-dialog/print-volunteer-faq-dialog.component';
import { DeleteVolunteerFaqDialogComponent } from './delete-volunteer-faq-dialog/delete-volunteer-faq-dialog.component';
import { AddSchoolDialogComponent } from './add-school-dialog/add-school-dialog.component';
import { EditFairDialogComponent } from '../edit-fair-dialog/edit-fair-dialog.component';

@Component({
  selector: 'app-fair-page',
  templateUrl: './fair-page.component.html',
  styleUrls: ['./fair-page.component.scss']
})
export class FairPageComponent implements OnInit {
  id: string;
  fair;
  studentsBySchool;
  chaperonesBySchool;
  chaperones;
  partners;
  volunteers;
  allStudents;
  allLunches;
  panelOpenState = false;
  edit = false;
  allStudentsClean: any[];
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  constructor(
    private router: Router,
    private fairs: FairsService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id;

    this.fairs.getFair(id).subscribe(
      fair => {
      this.fair = fair['fair'];
      this.partners = this.fair.partners;
      this.fair.date = format( new Date(this.fair.date), 'MMMM dd, yyyy');
      this.fair.time = format( new Date(this.fair.date), 'hh:mm a');

      const fairArray = Object.values(fair['fair']);
      const studentsBySchool = Object.values(fair['studentsBySchool']);
      console.log();
      const chaperonesBySchool = Object.values(fair['chaperonesBySchool']);


      this.studentsBySchool = studentsBySchool;
      this.chaperonesBySchool = chaperonesBySchool;

      // console.log(this.fair);
      // console.log('Students sorted by each school - Chaperones & Students\n');
      // console.log(studentsBySchool);
      // console.log('Chaperones sorted by each school - Chaperones & Students\n');
      // console.log(chaperonesBySchool);
      // console.log('Partners\n');
      // console.log(this.partners);

      // console.log('All students combined');
      let allStudents = [].concat.apply([], studentsBySchool);
      let allStudentsClean = [];

      allStudents.filter( student => {
        if (student.grade) {
          allStudentsClean.push(student);
        }
      });
      // console.log(allStudentsClean);
      this.allStudentsClean = allStudentsClean;

      // console.log('All lunches fron all schools combined combined');
      let allLunches = [];
      allStudents.filter( student => {
        if (student.lunch) {
          allLunches.push(student.lunch);
        }
      });
      // console.log(allLunches);
      this.allLunches = allLunches;

      // Add an edit property to all the agenda objects
      for (let item of this.fair['studentAgenda']) {
        if (item) {
          item.edit = false;
        }
      }
      for (let item of this.fair['chaperoneAgenda']) {
        if (item) {
          item.edit = false;
        }
      }
      for (let item of this.fair['volunteerAgenda']) {
        if (item) {
          item.edit = false;
        }
      }
      for (let item of this.fair['partnerAgenda']) {
        if (item) {
          item.edit = false;
        }
      }



      // this.fairs.fairsSubject.next(fairsArray.reverse());

      // // Subscribe to Fairs Subject in Fairs Service for Real time update changes
      // this.fairs.fairsSubject.subscribe(data => {
      //   this.allFairs = data.reverse();
      // });
    });
  }

  back() {
    console.log('Attempting navigation to fairs');
    this.router.navigate(['dashboard']);
  }

  editAgendaItem(item) {
    item.edit = true;
    console.log('Attempting to Edit');
  }

  deleteAgendaItem(id, index) {
    return this.fairs.deleteStudentAgendaItem(id, index).subscribe();
  }

  addAgendaItem(time, amOrPm, title) {
    const formattedTime = time + '' + amOrPm;
    return this.fairs.deleteStudentAgendaItem(formattedTime, title).subscribe();
  }

    // Student Dialogs
  printCSVDialog(): void {
      const dialogRef = this.dialog.open(PrintDialogComponent, {
        width: '250px',
        // data: {name: this.name, animal: this.animal}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
  }

  deleteFair(id) {
    console.log('deleting fair');
    this.fairs.deleteFair(id).subscribe();
  }

  editFair(data) {
    const dialogConfig = new MatDialogConfig();
    console.log(data);


    dialogConfig.data = {
      id:  data._id,
      title: data.title,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      summary: data.summary,
      description: data.description,
      date: data.date,
      time: data.time,
      photo: data.photo
  };

    const dialogRef = this.dialog.open(EditFairDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  // Student Dialogs
  addSchoolDialog(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AddSchoolDialogComponent);
  }

  deleteSchoolDialog(): void {
    const dialogRef = this.dialog.open(DeleteSchoolDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  printStudentsDialog(): void {
    const dialogRef = this.dialog.open(PrintStudentsDialogComponent, {
      width: '500px',
      data: this.studentsBySchool
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  addStudentSlotDialog(): void {
    const dialogRef = this.dialog.open(AddStudentSlotDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  printStudentsAgendaDialog(): void {
    const dialogRef = this.dialog.open(PrintStudentAgendaDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deleteStudentSlotDialog(): void {
    const dialogRef = this.dialog.open(DeleteStudentSlotDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  // Chaperone Dialogs
  printChaperonesDialog(): void {
    const dialogRef = this.dialog.open(PrintChaperonesDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  addChaperoneSlotDialog(): void {
    const dialogRef = this.dialog.open(AddChaperoneSlotDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  printChaperoneAgendaDialog(): void {
    const dialogRef = this.dialog.open(PrintChaperonesDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deleteChaperoneSlotDialog(): void {
    const dialogRef = this.dialog.open(DeleteChaperoneSlotDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  // Partner Dialogs
  addPartnerDialog(): void {
    const dialogRef = this.dialog.open(AddPartnerDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  printPartnersDialog(): void {
    const dialogRef = this.dialog.open(PrintPartnersDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deletePartnerDialog(): void {
    const dialogRef = this.dialog.open(DeletePartnerDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  addPartnerSlotDialog(): void {
    const dialogRef = this.dialog.open(AddPartnerSlotDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  printPartnerAgendaDialog(): void {
    const dialogRef = this.dialog.open(PrintPartnerAgendaDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deletePartnerSlotDialog(): void {
    const dialogRef = this.dialog.open(DeletePartnerSlotDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  addPartnerFAQDialog(): void {
    const dialogRef = this.dialog.open(AddPartnerFaqDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  printPartnerFAQDialog(): void {
    const dialogRef = this.dialog.open(PrintPartnerFaqDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deletePartnerFAQDialog(): void {
    const dialogRef = this.dialog.open(DeletePartnerFaqDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  // Volunteer Dialogs
  addVolunteerDialog(): void {
    const dialogRef = this.dialog.open(AddVolunteerDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  printVolunteersDialog(): void {
    const dialogRef = this.dialog.open(PrintVolunteersDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deleteVolunteerDialog(): void {
    const dialogRef = this.dialog.open(DeleteVolunteerDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  addVolunteerSlotDialog(): void {
    const dialogRef = this.dialog.open(AddVolunteerSlotDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  printVolunteerAgendaDialog(): void {
    const dialogRef = this.dialog.open(PrintVolunteerAgendaDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deleteVolunteerSlotDialog(): void {
    const dialogRef = this.dialog.open(DeleteVolunteerDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  addVolunteerFAQDialog(): void {
    const dialogRef = this.dialog.open(AddVolunteerFaqDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  printVolunteersFAQDialog(): void {
    const dialogRef = this.dialog.open(PrintVolunteerFaqDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deleteVolunteerFAQDialog(): void {
    const dialogRef = this.dialog.open(DeleteVolunteerFaqDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
