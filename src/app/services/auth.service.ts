import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BACKEND_URL = environment.url;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient
  ) {
      console.log('Authentication State: ');
      this.authenticationState.subscribe(console.log);
   }

   isAuthenticated() {
    return this.authenticationState.value;
  }

   // Login User
   login(data) {
    return this.http.post(`${this.BACKEND_URL}/api/admin/login`, data)
    .pipe(
      tap(res => {
        console.log('Logging in...');
        this.authenticationState.next(true);
      }),
      catchError(e => {
        throw new Error(e);
      })
    ).subscribe();
  }

  logout() {
    console.log('Logging out...');
    this.authenticationState.next(false);
  }
}
