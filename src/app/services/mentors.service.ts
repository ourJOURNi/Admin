import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {
  BACKEND_URL = environment.url;
  mentorsSubject = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    ) { }

    getMentors() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/mentors`);
    }

    addMentor(mentor, photoURL) {
      return this.http.post(`${this.BACKEND_URL}/api/admin/mentors/add-mentor`, { mentor, photoURL });
    }

    deleteMentor(_id) {
      return this.http.delete(`${this.BACKEND_URL}/api/admin/mentors/delete-mentor/${_id}`);
    }

    updateMentor(mentor) {
      console.log('Updating Mentor...');
      return this.http.put(`${this.BACKEND_URL}/api/admin/mentors/update-mentor`, mentor);
    }

    uploadPhoto(imageForm) {
      console.log('Uploading image...')
      return this.http.post(`${this.BACKEND_URL}/api/admin/photo/upload-mentor-photo`, imageForm)
    }

}
