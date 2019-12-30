import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
     // State for the User. If Authentication State == False, the app reverts back to the landing page
     this.auth.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
