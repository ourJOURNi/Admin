import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BACKEND_URL = environment.url;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
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
        console.error(e);
        if (e.error.msg === 'The email and password don\'t match.') {
          this.openSnackBar('Incorrect Email/Password', 'The email and password don\'t match.');
        } else if (e.error.msg === 'The user does not exist') {
          this.openSnackBar('Nonexistent User Account', 'There is no account with that email address.');
        } else if (e.message.startsWith('Http failure response')) {
          this.openSnackBar('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
        }  else {
          this.openSnackBar('Email/Password Error', 'Please try again.');
        }
        throw new Error(e);
      })
    ).subscribe();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
      panelClass: 'danger-snack-bar'
    });
  }

  logout() {
    console.log('Logging out...');
    this.authenticationState.next(false);
  }
}
