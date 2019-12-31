import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  BACKEND_URL = environment.url;
  studentsSubject = new BehaviorSubject([]);

  constructor(
    private http: HttpClient) { }

    getStudents() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/students`);
    }

    deleteStudent(id) {
      return this.http.delete(`${this.BACKEND_URL}/api/admin/students/delete/${id}`);
    }

    editStudent(student) {
      return this.http.post(`${this.BACKEND_URL}/api/admin/students/edit`, student);
    }
}
