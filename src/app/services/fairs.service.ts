import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FairsService {
  FAIRS_BACKEND_URL = environment.fairsUrl;
  BACKEND_URL = environment.url;
  fairsSubject = new BehaviorSubject([]);

  volunteers$ = new BehaviorSubject([]);
  partners$ = new BehaviorSubject([]);

  studentAgenda$ = new BehaviorSubject([]);
  chaperoneAgenda$ = new BehaviorSubject([]);
  partnerAgenda$ = new BehaviorSubject([]);
  volunteerAgenda$ = new BehaviorSubject([]);

  partnerFAQ$ = new BehaviorSubject([]);
  volunteerFAQ$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  getFairs() {
    return this.http.get(`${this.BACKEND_URL}/api/admin/fairs`);
  }

  getFair(id) {
    return this.http.post(`${this.BACKEND_URL}/api/admin/fairs/fair`, {_id: id});
  }

  addFair(fair) {
    console.log('From Fairs service: ');
    console.log(fair);
    return this.http.post(`${this.BACKEND_URL}/api/admin/fairs/add-fair`, fair);
  }

  deleteFair(id) {
    this.router.navigate(['dashboard']);
    return this.http.delete(`${this.BACKEND_URL}/api/admin/fairs/delete-fair/${id}`);
  }

  updateFair(fair) {
    console.log(fair);
    return this.http.put(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/update-fair`, fair);
  }

  printStudents(students) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/print-students`, {students: students});
  }

  // Students
  deleteStudentAgendaItem(fairId, index) {
    console.log('Attemping to delete student agenda item');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/delete-student-agenda-item`, {fairId, index});
  }

  addStudentAgendaItem(id, time, title) {
    console.log('Attemping to add student agenda item');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/add-student-agenda-item`, {id, time, title});
  }

  editStudentAgendaItem(id, index, time, title) {
    console.log('Attemping to edit student agenda item');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/edit-student-agenda-item`, {id, index, time, title});
  }

  // Chaperones
  deleteChaperoneAgendaItem(fairId, index) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/delete-chaperone-agenda-item`, {fairId, index});
  }

  addChaperoneAgendaItem(id, time, title) {
    console.log('Attemping to add chaperone agenda item');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/add-chaperone-agenda-item`, {id, time, title});
  }

  editChaperoneAgendaItem(id, index, time, title) {
    console.log('Attemping to edit chaperone agenda item');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/edit-chaperone-agenda-item`, {id, index, time, title});
  }

  // Volunteers
  addVolunteer(id, name, email, phone) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/add-volunteer`, {id, name, email, phone});
  }

  editVolunteer(id, index, name, email, phone) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/edit-volunteer`, {id, index, name, email, phone});
  }

  deleteVolunteer(id, index) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/delete-volunteer`, {id, index});
  }

  deleteVolunteerAgendaItem(fairId,  index) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/delete-volunteer-agenda-item`, {fairId, index});
  }

  addVolunteerAgendaItem(id, time, title) {
    console.log('Attemping to add volunteer agenda item');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/add-volunteer-agenda-item`, {id, time, title});
  }

  editVolunteerAgendaItem(id, index, time, title) {
    console.log('Attemping to edit volunteer agenda item');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/edit-volunteer-agenda-item`, {id, index, time, title});
  }

  addVolunteerFAQ(id, question, answer) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/add-volunteer-faq`, { id, question, answer});
  }

  deleteVolunteerFAQ(fairId, index) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/delete-volunteer-faq`, {fairId, index });
  }

  editVolunteerFAQ(id, index, question, answer) {
    console.log('Attempting to edit FAQ');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/edit-volunteer-faq`, {id, index, question, answer});
  }


  // Partners
  deletePartnerAgendaItem(fairId, index) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/delete-partner-agenda-item`, { fairId, index});
  }

  addPartnerAgendaItem(id, time, title) {
    console.log('Attemping to add partner agenda item');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/add-partner-agenda-item`, {id, time, title});
  }

  editPartnerAgendaItem(id, index, time, title) {
    console.log('Attemping to edit partner agenda item');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/edit-partner-agenda-item`, {id, index, time, title});
  }

  addPartnerFAQ(id, question, answer) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/add-partner-faq`, { id, question, answer});
  }

  deletePartnerFAQ(fairId, index) {
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/delete-partner-faq`, {fairId, index });
  }

  editPartnerFAQ(id, index, question, answer) {
    console.log('Attempting to edit FAQ');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/edit-partner-faq`, {id, index, question, answer});
  }

  verifyPartner(index, id) {
    console.log('Attempting to edit FAQ');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/verify-partner`, {index, id});
  }

  unverifyPartner(index, id) {
    console.log('Attempting to edit FAQ');
    return this.http.post(`${this.FAIRS_BACKEND_URL}/api/admin/fairs/unverify-partner`, {index, id});
  }




}
