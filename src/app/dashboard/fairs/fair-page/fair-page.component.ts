import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
import { Subscription } from 'rxjs';
import { DeleteFairsDialogComponent } from '../delete-fair-dialog/delete-fair-dialog.component';

@Component({
  selector: 'app-fair-page',
  templateUrl: './fair-page.component.html',
  styleUrls: ['./fair-page.component.scss']
})
export class FairPageComponent implements OnInit, OnDestroy {
  id: string;
  fair;
  title: any;


  chaperones;
  partners;
  volunteers;
  allStudents;
  allStudentsClean: any[];

  studentsBySchool;
  chaperonesBySchool;

  allLunches;
  panelOpenState = false;
  edit = false;
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  editAgendaForm: FormGroup;
  editPartnerQuestionForm: FormGroup;
  editVolunteerQuestionForm: FormGroup;
  editVolunteerForm: FormGroup;
  partnerSlider: FormGroup;
  activate = new FormControl();

  fairSubscription: Subscription;

  studentsAgenda;
  chaperonesAgenda;
  volunteersAgenda;
  partnersAgenda;

  volunteersFAQ: any[];
  partnersFAQ: any[];
  faqQuestion: any;
  faqAnswer: any;
  time: any;
  date: any;
  address: any;
  city: any;
  state: any;
  zip: any;
  summary: any;

  allStudentLunches: any[];
  allChaporoneLunches: any[];
  allPartnerLunches: any[];
  allVolunteerLunches: any[];

  hamLunches;
  turkeyLunches;
  veggieLunches;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute) {

      const id  = this.activatedRoute.snapshot.paramMap.get('id');
      this.id = id;
      this.fairSubscription = this.fairs.getFair(id).subscribe(
        fair => {
        this.fair = fair['fair'];
        this.title = this.fair.title;
        this.time = this.fair.time;
        this.date = this.fair.date;
        this.address = this.fair.address;
        this.city = this.fair.city;
        this.state = this.fair.state;
        this.zip = this.fair.zip;
        this.summary = this.fair.summary;

        this.fairs.studentAgenda$.next(this.fair['studentAgenda']);
        this.fairs.chaperoneAgenda$.next(this.fair['chaperoneAgenda']);
        this.fairs.volunteerAgenda$.next(this.fair['volunteerAgenda']);
        this.fairs.partnerAgenda$.next(this.fair['partnerAgenda']);
        this.fairs.partnerFAQ$.next(this.fair[
          'partnerFAQ']);
        this.fairs.volunteerFAQ$.next(this.fair[
          'volunteerFAQ']);
        this.fairs.partners$.next(this.fair[
          'partners']);
        this.fairs.volunteers$.next(this.fair[
          'volunteers']);

        this.fairs.studentAgenda$.subscribe(
          data => {
            this.studentsAgenda = data;
          }
        );
        this.fairs.chaperoneAgenda$.subscribe(
          data => {
            this.chaperonesAgenda = data;
          }
        );
        this.fairs.volunteerAgenda$.subscribe(
          data => {
            this.volunteersAgenda = data;
          }
        );
        this.fairs.partnerAgenda$.subscribe(
          data => {
            this.partnersAgenda = data;
          }
        );
        this.fairs.volunteerFAQ$.subscribe(
          data => {
            this.volunteersFAQ = data;
          }
        );
        this.fairs.partnerFAQ$.subscribe(
          data => {
            this.partnersFAQ = data;
          }
        );
        this.fairs.volunteers$.subscribe(
          data => {
            this.volunteers = data;
          }
        );
        this.fairs.partners$.subscribe(
          data => {
            this.partners = data;
          }
        );

        this.fair.date = format( new Date(this.fair.date), 'MMMM dd, yyyy');
        this.fair.time = format( new Date(this.fair.date), 'hh:mm a');

        const studentsBySchool = Object.values(fair['studentsBySchool']);
        console.log();
        const chaperonesBySchool = Object.values(fair['chaperonesBySchool']);


        this.studentsBySchool = studentsBySchool;
        this.chaperonesBySchool = chaperonesBySchool;

        let allStudents = [].concat.apply([], studentsBySchool);
        let allSChaporones = [].concat.apply([], chaperonesBySchool);
        let allStudentsClean = [];

        allStudents.filter( student => {
          if (student.grade) {
            allStudentsClean.push(student);
          }
        });

        this.allStudentsClean = allStudentsClean;

        // console.log('All lunches fron all schools combined combined');
        let allStudentLunches = [];
        let allChaporoneLunches = [];
        let allPartnerLunches = [];
        let allVolunteerLunches = [];

        this.partners.filter( partner => {
          if (partner.lunch) {
            allPartnerLunches.push(partner.lunch);
          }
        });
        this.volunteers.filter( volunteer => {
          if (volunteer.lunch) {
            allVolunteerLunches.push(volunteer.lunch);
          }
        });

        allStudents.filter( student => {
          if (student.lunch) {
            allStudentLunches.push(student.lunch);
          }
        });
        allSChaporones.filter( student => {
          if (student.lunch) {
            allChaporoneLunches.push(student.lunch);
          }
        });

        this.allLunches = allStudentLunches.concat(allChaporoneLunches, allPartnerLunches, allVolunteerLunches);
        let hamLunches = [];
        let turkeyLunches = [];
        let veggieLunches = [];

        // tslint:disable-next-line: forin
        for (const lunch of this.allLunches) {

          if (lunch === 'Ham') {
            hamLunches.push(lunch);
          }
          if (lunch === 'Turkey') {
            turkeyLunches.push(lunch);
          }
          if (lunch === 'Veggie') {
            veggieLunches.push(lunch);

          }
        }


        this.hamLunches = hamLunches.length;
        this.turkeyLunches = turkeyLunches.length;
        this.veggieLunches = veggieLunches.length;




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

        // FAQS
        for (let item of this.fair['partnerFAQ']) {
          if (item) {
            item.edit = false;
          }
        }
        for (let item of this.fair['volunteerFAQ']) {
          if (item) {
            item.edit = false;
          }
        }

        for (let volunteer of this.fair['volunteers']) {
          if (volunteer) {
            volunteer.edit = false;
          }
        }
        for (let partner of this.fair['partners']) {
          if (partner) {
            partner.edit = false;
          }
        }
      });


    }


  ngOnDestroy(): void {
    this.fairSubscription.unsubscribe();
  }

  ngOnInit() {



    this.editAgendaForm = this.formBuilder.group({
      time: [''],
      title: [''],
    });

    this.editPartnerQuestionForm = this.formBuilder.group({
      question: [''],
      answer: [''],
    });

    this.editVolunteerQuestionForm = this.formBuilder.group({
      question: [''],
      answer: [''],
    });

    this.editVolunteerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
    });

    this.partnerSlider = this.formBuilder.group({
      verified: ['', Validators.requiredTrue]
    });
  }

back() {
    console.log('Attempting navigation to fairs');
    this.router.navigate(['dashboard']);
  }
  onChecked(event, partner, i) {
    console.log(event);
    console.log(i);
    if (event.checked) {
      console.log('Partner is Verified');
      this.fairs.verifyPartner(i, this.id).subscribe(
        data => {

        }
      );
      return partner.verified = true;
    }
    if (!event.checked) {
      console.log('Partner is NOT Verified');
      this.fairs.unverifyPartner(i, this.id).subscribe(
        data => {

        }
      );
      return partner.verified = false;
    }

  }

    // Student Dialogs
printCSVDialog(): void {
      const dialogRef = this.dialog.open(PrintDialogComponent, {
        width: '450px',
        // data: {name: this.name, animal: this.animal}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
  }

deleteFair(id) {
    console.log('deleting fair');
    const dialogRef = this.dialog.open(DeleteFairsDialogComponent, {
      width: '450px',
      data: {
        id: this.id,
        title: this.title
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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

editStudentAgendaItem(item) {
    item.edit = true;
    console.log('Attempting to Edit');
    console.log(item.time);

    this.editAgendaForm.get('time').setValue(item.time);
    this.editAgendaForm.get('title').setValue(item.title);
  }

cancelEditStudentAgendaItem(item) {
    item.edit = false;
    console.log('Cancelling Edit');
  }

deleteStudentAgendaItem(id, index) {
    this.fairs.deleteStudentAgendaItem(id, index).subscribe(
      data => {
        this.fairs.studentAgenda$.next(Object.values(data));
        this.snackBar.open('You have Deleted an Agenda Item', 'Close', {
          duration: 2000});
      });
    return;
  }

editStudentAgendaItemFinal(id, index) {
  const timeValue = this.editAgendaForm.controls.time.value;
  const title = this.editAgendaForm.controls.title.value;
  let formattedTime = null;

  // Add AM or PM to time value
  function onTimeChange(time) {
    const timeSplit = time.split(':');
    let hours = time.split(':');
    let minutes = time.split(':');
    let meridian = time.split(':');
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
        meridian = 'PM';
        hours -= 12;
      } else if (hours < 12) {
        meridian = 'AM';
        if (hours === 0) {
          hours = 12;
        }
      } else {
        meridian = 'PM';
      }

    formattedTime = hours + ':' + minutes + ' ' + meridian;
  }
  onTimeChange(timeValue);
  if (!timeValue) {
    console.log('There was no time value!');
  }
  if (!title) {
    console.log('There was no title!');
  }
  if (title && timeValue) {
    return this.fairs.editStudentAgendaItem(id, index, formattedTime, title).subscribe(
      data => {
        this.fairs.studentAgenda$.next(Object.values(data));
        this.snackBar.open('You have Editted an Agenda Item', 'Close', {
          duration: 2000});
      });
  }
  }

addStudentSlotDialog(data): void {
    const dialogRef = this.dialog.open(AddStudentSlotDialogComponent, {
      width: '450px',
      data: {id: this.id}
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

printStudentsAgendaDialog(): void {
    const dialogRef = this.dialog.open(PrintStudentAgendaDialogComponent, {
      width: '450px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

deleteStudentSlotDialog(): void {
    const dialogRef = this.dialog.open(DeleteStudentSlotDialogComponent, {
      width: '450px',
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
      width: '500px',
      data: this.chaperonesBySchool
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

editChaperoneAgendaItem(item) {
    item.edit = true;
    console.log('Attempting to Edit');
  }

cancelEditChaperoneAgendaItem(item) {
    item.edit = false;
    console.log('Cancelling Edit');
  }

deleteChaperoneAgendaItem(id, index) {
    this.fairs.deleteStudentAgendaItem(id, index).subscribe(
      data => {
        this.fairs.studentAgenda$.next(Object.values(data));
        this.snackBar.open('You have Deleted an Agenda Item', 'Close', {
          duration: 2000});
      });
    return;
  }

editChaperoneAgendaItemFinal(id, index) {
  const timeValue = this.editAgendaForm.controls.time.value;
  const title = this.editAgendaForm.controls.title.value;
  let formattedTime = null;

  // Add AM or PM to time value
  function onTimeChange(time) {
    const timeSplit = time.split(':');
    let hours = time.split(':');
    let minutes = time.split(':');
    let meridian = time.split(':');
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
        meridian = 'PM';
        hours -= 12;
      } else if (hours < 12) {
        meridian = 'AM';
        if (hours === 0) {
          hours = 12;
        }
      } else {
        meridian = 'PM';
      }

    formattedTime = hours + ':' + minutes + ' ' + meridian;
  }
  onTimeChange(timeValue);
  if (!timeValue) {
    console.log('There was no time value!');
  }
  if (!title) {
    console.log('There was no title!');
  }
  if (title && timeValue) {
    return this.fairs.editChaperoneAgendaItem(id, index, formattedTime, title).subscribe(
      data => {
        this.fairs.chaperoneAgenda$.next(Object.values(data));
        this.snackBar.open('You have Editted an Agenda Item', 'Close', {
          duration: 2000});
      });
  }
  }

addChaperoneSlotDialog(): void {
    const dialogRef = this.dialog.open(AddChaperoneSlotDialogComponent, {
      width: '450px',
      data: {id: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

printChaperonesAgendaDialog(): void {
    const dialogRef = this.dialog.open(PrintChaperonesDialogComponent, {
      width: '450px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

deleteChaperoneSlotDialog(): void {
    const dialogRef = this.dialog.open(DeleteChaperoneSlotDialogComponent, {
      width: '450px',
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
      width: '450px',
      data: {id: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
printPartnersDialog(): void {
    const dialogRef = this.dialog.open(PrintPartnersDialogComponent, {
      width: '500px',
      data: this.partners
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

deletePartnerDialog(): void {
    const dialogRef = this.dialog.open(DeletePartnerDialogComponent, {
      width: '450px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

editPartnerAgendaItem(item) {
    item.edit = true;
    console.log('Attempting to Edit');
  }

cancelEditPartnerAgendaItem(item) {
    item.edit = false;
    console.log('Cancelling Edit');
  }

deletePartnerAgendaItem(id, index) {
    this.fairs.deleteStudentAgendaItem(id, index).subscribe(
      data => {
        this.fairs.studentAgenda$.next(Object.values(data));
        this.snackBar.open('You have Deleted an Agenda Item', 'Close', {
          duration: 2000});
      });
    return;
  }

editPartnerAgendaItemFinal(id, index) {
  const timeValue = this.editAgendaForm.controls.time.value;
  const title = this.editAgendaForm.controls.title.value;
  let formattedTime = null;

  // Add AM or PM to time value
  function onTimeChange(time) {
    const timeSplit = time.split(':');
    let hours = time.split(':');
    let minutes = time.split(':');
    let meridian = time.split(':');
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
        meridian = 'PM';
        hours -= 12;
      } else if (hours < 12) {
        meridian = 'AM';
        if (hours === 0) {
          hours = 12;
        }
      } else {
        meridian = 'PM';
      }

    formattedTime = hours + ':' + minutes + ' ' + meridian;
  }
  onTimeChange(timeValue);
  if (!timeValue) {
    console.log('There was no time value!');
  }
  if (!title) {
    console.log('There was no title!');
  }
  if (title && timeValue) {
    return this.fairs.editPartnerAgendaItem(id, index, formattedTime, title).subscribe(
      data => {
        this.fairs.partnerAgenda$.next(Object.values(data));
        this.snackBar.open('You have Editted an Agenda Item', 'Close', {
          duration: 2000});
      });
  }
  }

addPartnerSlotDialog(): void {
    const dialogRef = this.dialog.open(AddPartnerSlotDialogComponent, {
      width: '450px',
      data: {id: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

printPartnerAgendaDialog(): void {
    const dialogRef = this.dialog.open(PrintPartnerAgendaDialogComponent, {
      width: '450px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

deletePartnerSlotDialog(): void {
    const dialogRef = this.dialog.open(DeletePartnerSlotDialogComponent, {
      width: '450px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

addPartnerFAQDialog(): void {
    const dialogRef = this.dialog.open(AddPartnerFaqDialogComponent, {
      width: '450px',
      data: {id: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

editPartnerQuestion(item) {
    console.log('Attempting to edit partner question');
    item.edit = true;
    this.editPartnerQuestionForm.get('question').setValue(item.question);
    this.editPartnerQuestionForm.get('answer').setValue(item.answer);
  }

deletePartnerQuestion(id, index) {
    console.log('Attempting to delete partner question');
    this.fairs.deletePartnerFAQ(id, index).subscribe(
      data => {
        this.fairs.partnerFAQ$.next(Object.values(data));
        this.snackBar.open('You have Deleted an FAQ', 'Close', {
          duration: 2000});
      });
    return;
  }

editPartnerQuestionFinal(id, index) {
    console.log('Attempting to edit partner question FINAL');
    const question = this.editPartnerQuestionForm.controls.question.value;
    const answer = this.editPartnerQuestionForm.controls.answer.value;

    console.log(question);
    console.log(answer);

    return this.fairs.editPartnerFAQ(id, index, question, answer).subscribe(
      data => {
        this.fairs.partnerFAQ$.next(Object.values(data));
        this.snackBar.open('You have Editted an FAQ', 'Close', {
          duration: 2000});
      });
  }

cancelEditQuestion(item) {
    console.log('Attempting to cancel edit question');
    item.edit = false;
  }

printPartnerFAQDialog(): void {
    const dialogRef = this.dialog.open(PrintPartnerFaqDialogComponent, {
      width: '450px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

deletePartnerFAQDialog(): void {
    const dialogRef = this.dialog.open(DeletePartnerFaqDialogComponent, {
      width: '450px',
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
      width: '450px',
      data: {id: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  editVolunteer(volunteer): void {
    console.log('Attempting to EDIT Volunteer');
    volunteer.edit = true;
    let name = this.editVolunteerForm.get('name').setValue(volunteer.name);
    let email = this.editVolunteerForm.get('email').setValue(volunteer.email);
    let phone = this.editVolunteerForm.get('phone').setValue(volunteer.phone);

  }

  editVolunteerFinal(id, index) {
    let name = this.editVolunteerForm.get('name').value;
    let email = this.editVolunteerForm.get('email').value;
    let phone = this.editVolunteerForm.get('phone').value;
    this.fairs.editVolunteer(id, index, name, email, phone).subscribe(
      data => {
        this.fairs.volunteers$.next(Object.values(data));
      }
    );
  }

  cancelEditVolunteer(volunteer) {
    console.log('Attempting to cancel edit volunteer');
    volunteer.edit = false;

  }

  deleteVolunteer(id, index): void {
    console.log('Attempting to DELETE Volunteer');
    this.fairs.deleteVolunteer(id, index).subscribe(
      data => {
        this.fairs.volunteers$.next(Object.values(data));
        this.snackBar.open('You have Deleted a Volunteer', 'Close', {
          duration: 2000});
      }
    );
  }

  printVolunteersDialog(): void {
    const dialogRef = this.dialog.open(PrintVolunteersDialogComponent, {
      width: '500px',
      data: this.volunteers
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  editVolunteerAgendaItem(item) {
      item.edit = true;
      console.log('Attempting to Edit');

    }

  cancelEditVolunteerAgendaItem(item) {
      item.edit = false;
      console.log('Cancelling Edit');
    }

  deleteVolunteerAgendaItem(id, index) {
      this.fairs.deleteVolunteerAgendaItem(id, index).subscribe(
        data => {
          this.fairs.volunteerAgenda$.next(Object.values(data));
          this.snackBar.open('You have Deleted an Agenda Item', 'Close', {
            duration: 2000});
        });
      return;
    }

  editVolunteerAgendaItemFinal(id, index) {
    const timeValue = this.editAgendaForm.controls.time.value;
    const title = this.editAgendaForm.controls.title.value;
    let formattedTime = null;

    // Add AM or PM to time value
    function onTimeChange(time) {
      const timeSplit = time.split(':');
      let hours = time.split(':');
      let minutes = time.split(':');
      let meridian = time.split(':');
      hours = timeSplit[0];
      minutes = timeSplit[1];
      if (hours > 12) {
          meridian = 'PM';
          hours -= 12;
        } else if (hours < 12) {
          meridian = 'AM';
          if (hours === 0) {
            hours = 12;
          }
        } else {
          meridian = 'PM';
        }

      formattedTime = hours + ':' + minutes + ' ' + meridian;
    }
    onTimeChange(timeValue);
    if (!timeValue) {
      console.log('There was no time value!');
    }
    if (!title) {
      console.log('There was no title!');
    }
    if (title && timeValue) {
      return this.fairs.editVolunteerAgendaItem(id, index, formattedTime, title).subscribe(
        data => {
          this.fairs.volunteerAgenda$.next(Object.values(data));
          this.snackBar.open('You have Editted an Agenda Item', 'Close', {
            duration: 2000});
        });
    }
    }

  addVolunteerSlotDialog(): void {
      const dialogRef = this.dialog.open(AddVolunteerSlotDialogComponent, {
        width: '450px',
        data: {id: this.id}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }

  printVolunteerAgendaDialog(): void {
      const dialogRef = this.dialog.open(PrintVolunteerAgendaDialogComponent, {
        width: '450px',
        // data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }

  deleteVolunteerSlotDialog(): void {
      const dialogRef = this.dialog.open(DeleteVolunteerDialogComponent, {
        width: '450px',
        // data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }

  addVolunteerFAQDialog(): void {
      const dialogRef = this.dialog.open(AddVolunteerFaqDialogComponent, {
        width: '450px',
        data: {id: this.id}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }

  editVolunteerQuestion(item) {
    console.log('Attempting to edit partner question');
    item.edit = true;
    this.editVolunteerQuestionForm.get('question').setValue(item.question);
    this.editVolunteerQuestionForm.get('answer').setValue(item.answer);
    }

  deleteVolunteerQuestion(id, index) {
    console.log('Attempting to delete partner question');
    this.fairs.deleteVolunteerFAQ(id, index).subscribe(
      data => {
        this.fairs.volunteerFAQ$.next(Object.values(data));
        this.snackBar.open('You have Deleted an FAQ', 'Close', {
        duration: 2000});
        });
    return;
  }

  editVolunteerQuestionFinal(id, index) {
      console.log('Attempting to edit volunteer question FINAL');
      const question = this.editVolunteerQuestionForm.controls.question.value;
      const answer = this.editVolunteerQuestionForm.controls.answer.value;

      console.log(question);
      console.log(answer);

      return this.fairs.editVolunteerFAQ(id, index, question, answer).subscribe(
        data => {
          this.fairs.volunteerFAQ$.next(Object.values(data));
          this.snackBar.open('You have Editted an FAQ', 'Close', {
            duration: 2000});
        });
    }

  printVolunteersFAQDialog(): void {
      const dialogRef = this.dialog.open(PrintVolunteerFaqDialogComponent, {
        width: '450px',
        // data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }

  deleteVolunteerFAQDialog(): void {
      const dialogRef = this.dialog.open(DeleteVolunteerFaqDialogComponent, {
        width: '450px',
        // data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }

}
