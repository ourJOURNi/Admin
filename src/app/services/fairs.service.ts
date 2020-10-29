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
  BACKEND_URL = environment.url;
  fairsSubject = new BehaviorSubject([]);

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

  deleteStudentAgendaItem(fairId, index) {
    console.log('Attemping to delete student agenda item');
    return this.http.post(`${this.BACKEND_URL}/api/admin/fairs/delete-student-agenda-item`, {fairId, index});
  }

  addStudentAgendaItem(time, title) {
    console.log('Attemping to add student agenda item');
    return this.http.post(`${this.BACKEND_URL}/api/admin/fairs/add-student-agenda-item`, {time, title});
  }

  deleteChaperoneAgendaItem(index) {
    return this.http.delete(`${this.BACKEND_URL}/api/admin/fairs/delete-chaperone-agenda-item/${index}`);
  }

  deleteVolunteerAgendaItem(index) {
    return this.http.delete(`${this.BACKEND_URL}/api/admin/fairs/delete-volunteer-agenda-item/${index}`);
  }

  deletePartnerAgendaItem(index) {
    return this.http.delete(`${this.BACKEND_URL}/api/admin/fairs/delete-partner-agenda-item/${index}`);
  }

  updateFair(fair) {
    console.log(fair);
    return this.http.put(`${this.BACKEND_URL}/api/admin/fairs/update-fair`, fair);
  }

  addSchool(school) {
    console.log(school);
    return this.http.post(`${this.BACKEND_URL}/api/admin/fairs/add-school`, {school: school});
  }

  printStudents(students) {
    return this.http.post(`${this.BACKEND_URL}/api/admin/fairs/print-students`, {students: students});
  }


}
