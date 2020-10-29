import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFairDialogComponent } from './add-fair-dialog/add-fair-dialog.component';
import { DeleteFairsDialogComponent } from './delete-fair-dialog/delete-fair-dialog.component';
import { EditFairDialogComponent } from './edit-fair-dialog/edit-fair-dialog.component';
import { FairsRoutingModule } from './fairs-routing.module';
import { FairPageComponent } from './fair-page/fair-page.component';
import { AddSchoolDialogComponent } from './fair-page/add-school-dialog/add-school-dialog.component';
import { AddStudentSlotDialogComponent } from './fair-page/add-student-slot-dialog/add-student-slot-dialog.component';
import { PrintDialogComponent } from './fair-page/print-dialog/print-dialog.component';
import { AddPartnerSlotDialogComponent } from './fair-page/add-partner-slot-dialog/add-partner-slot-dialog.component';
import { AddChaperoneSlotDialogComponent } from './fair-page/add-chaperone-slot-dialog/add-chaperone-slot-dialog.component';
import { AddVolunteerSlotDialogComponent } from './fair-page/add-volunteer-slot-dialog/add-volunteer-slot-dialog.component';
import { DeleteVolunteerDialogComponent } from './fair-page/delete-volunteer-dialog/delete-volunteer-dialog.component';
import { DeletePartnerDialogComponent } from './fair-page/delete-partner-dialog/delete-partner-dialog.component';
import { DeleteStudentSlotDialogComponent } from './fair-page/delete-student-slot-dialog/delete-student-slot-dialog.component';
import { DeleteChaperoneSlotDialogComponent } from './fair-page/delete-chaperone-slot-dialog/delete-chaperone-slot-dialog.component';
import { DeletePartnerSlotDialogComponent } from './fair-page/delete-partner-slot-dialog/delete-partner-slot-dialog.component';
import { DeleteVolunteerSlotDialogComponent } from './fair-page/delete-volunteer-slot-dialog/delete-volunteer-slot-dialog.component';
import { PrintChaperonesDialogComponent } from './fair-page/print-chaperones-dialog/print-chaperones-dialog.component';
import { PrintStudentsDialogComponent } from './fair-page/print-students-dialog/print-students-dialog.component';
import { PrintPartnersDialogComponent } from './fair-page/print-partners-dialog/print-partners-dialog.component';
import { PrintVolunteersDialogComponent } from './fair-page/print-volunteers-dialog/print-volunteers-dialog.component';
import { AddPartnerFaqDialogComponent } from './fair-page/add-partner-faq-dialog/add-partner-faq-dialog.component';
import { DeletePartnerFaqDialogComponent } from './fair-page/delete-partner-faq-dialog/delete-partner-faq-dialog.component';
import { DeleteVolunteerFaqDialogComponent } from './fair-page/delete-volunteer-faq-dialog/delete-volunteer-faq-dialog.component';
import { AddVolunteerFaqDialogComponent } from './fair-page/add-volunteer-faq-dialog/add-volunteer-faq-dialog.component';
import { PrintVolunteerFaqDialogComponent } from './fair-page/print-volunteer-faq-dialog/print-volunteer-faq-dialog.component';
import { PrintPartnerFaqDialogComponent } from './fair-page/print-partner-faq-dialog/print-partner-faq-dialog.component';
import { PrintStudentAgendaDialogComponent } from './fair-page/print-student-agenda-dialog/print-student-agenda-dialog.component';
import { PrintChaperoneAgendaDialogComponent } from './fair-page/print-chaperone-agenda-dialog/print-chaperone-agenda-dialog.component';
import { PrintPartnerAgendaDialogComponent } from './fair-page/print-partner-agenda-dialog/print-partner-agenda-dialog.component';
import { PrintVolunteerAgendaDialogComponent } from './fair-page/print-volunteer-agenda-dialog/print-volunteer-agenda-dialog.component';
import { AddPartnerDialogComponent } from './fair-page/add-partner-dialog/add-partner-dialog.component';
import { AddVolunteerDialogComponent } from './fair-page/add-volunteer-dialog/add-volunteer-dialog.component';
import { DeleteSchoolDialogComponent } from './fair-page/delete-school-dialog/delete-school-dialog.component';


@NgModule({
  declarations: [
  AddFairDialogComponent,
  DeleteFairsDialogComponent,
  EditFairDialogComponent,
  FairPageComponent,
  AddSchoolDialogComponent,
  DeleteSchoolDialogComponent,
  PrintDialogComponent,
  AddStudentSlotDialogComponent,
  AddChaperoneSlotDialogComponent,
  AddPartnerSlotDialogComponent,
  AddVolunteerSlotDialogComponent,
  DeleteVolunteerDialogComponent,
  DeletePartnerDialogComponent,
  DeleteStudentSlotDialogComponent,
  DeleteChaperoneSlotDialogComponent,
  DeletePartnerSlotDialogComponent,
  DeleteVolunteerSlotDialogComponent,
  PrintChaperonesDialogComponent,
  PrintStudentsDialogComponent,
  PrintPartnersDialogComponent,
  PrintVolunteersDialogComponent,
  AddPartnerFaqDialogComponent,
  DeletePartnerFaqDialogComponent,
  DeleteVolunteerFaqDialogComponent,
  AddVolunteerFaqDialogComponent,
  PrintVolunteerFaqDialogComponent,
  PrintPartnerFaqDialogComponent,
  PrintStudentAgendaDialogComponent,
  PrintChaperoneAgendaDialogComponent,
  PrintPartnerAgendaDialogComponent,
  PrintVolunteerAgendaDialogComponent,
  AddPartnerDialogComponent,
  AddVolunteerDialogComponent,
  DeleteVolunteerDialogComponent,
  DeletePartnerDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FairsRoutingModule
  ],
  entryComponents: [
    AddFairDialogComponent,
    DeleteFairsDialogComponent,
    EditFairDialogComponent,
    AddSchoolDialogComponent,
    DeleteSchoolDialogComponent,
    PrintDialogComponent,
    AddStudentSlotDialogComponent,
    AddChaperoneSlotDialogComponent,
    AddPartnerSlotDialogComponent,
    AddVolunteerSlotDialogComponent,
    DeleteVolunteerDialogComponent,
    DeletePartnerDialogComponent,
    DeleteStudentSlotDialogComponent,
    DeleteChaperoneSlotDialogComponent,
    DeletePartnerSlotDialogComponent,
    DeleteVolunteerSlotDialogComponent,
    PrintChaperonesDialogComponent,
    PrintStudentsDialogComponent,
    PrintPartnersDialogComponent,
    PrintVolunteersDialogComponent,
    AddPartnerFaqDialogComponent,
    DeletePartnerFaqDialogComponent,
    DeleteVolunteerFaqDialogComponent,
    AddVolunteerFaqDialogComponent,
    PrintVolunteerFaqDialogComponent,
    PrintPartnerFaqDialogComponent,
    PrintStudentAgendaDialogComponent,
    PrintChaperoneAgendaDialogComponent,
    PrintPartnerAgendaDialogComponent,
    PrintVolunteerAgendaDialogComponent,
    AddPartnerDialogComponent,
    AddVolunteerDialogComponent,
    DeleteVolunteerDialogComponent,
    DeletePartnerDialogComponent]
})
export class FairsModule { }
