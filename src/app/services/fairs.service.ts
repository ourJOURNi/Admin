import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FairsService {
  BACKEND_URL = environment.url;
  fairsSubject = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    ) { }

  getFairs() {
    return this.http.get(`${this.BACKEND_URL}/api/admin/fairs`);
  }

  addFair(fair) {
    return this.http.post(`${this.BACKEND_URL}/api/admin/fairs/add-fair`, fair);
  }

  deleteFair(id) {
    return this.http.delete(`${this.BACKEND_URL}/api/admin/fairs/delete-fair/${id}`);
  }

  updateFair(fair) {
    console.log('Updating Job...');
    return this.http.put(`${this.BACKEND_URL}/api/admin/fairs/update-fair`, fair);
  }


}
