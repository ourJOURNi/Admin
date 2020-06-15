import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  BACKEND_URL = environment.url;
  jobsSubject = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
  ) { }

    getJobs() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/jobs`);
    }

    addJob(job, logoURL) {
      return this.http.post(`${this.BACKEND_URL}/api/admin/jobs/add-job`, { job, logoURL });
    }

    deleteJob(id) {
      return this.http.delete(`${this.BACKEND_URL}/api/admin/jobs/delete-job/${id}`);
    }

    updateJob(job) {
      console.log('Updating Job...');
      return this.http.put(`${this.BACKEND_URL}/api/admin/jobs/update-job`, job);
    }

    uploadLogo(imageForm) {
      console.log('Uploading image...');
      return this.http.post(`${this.BACKEND_URL}/api/admin/photo/upload-job-logo`, imageForm);
    }

}
