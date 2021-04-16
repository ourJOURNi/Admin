import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  BACKEND_URL = environment.url;
  eventsSubject = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    ) { }

  getEvents() {
    return this.http.get(`${this.BACKEND_URL}/api/admin/events`);
  }

  addEvent(event, photoURL) {
    return this.http.post(`${this.BACKEND_URL}/api/admin/events/add-event`, { event, photoURL });
  }

  deleteEvent(id) {
    return this.http.delete(`${this.BACKEND_URL}/api/admin/events/delete-event/${id}`);
  }

  updateEvent(event) {
    console.log('Updating Event...');
    return this.http.post(`${this.BACKEND_URL}/api/admin/events/update-event`, event);
  }

  uploadPhoto(imageForm) {
    console.log('Uploading image...');
    return this.http.post(`${this.BACKEND_URL}/api/admin/photo/upload-event-photo`, imageForm);
  }


}
