import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // State for the User. If Authentication State == False, the app reverts back to the landing page
    this.auth.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigateByUrl('/dashboard');
      } else {
        // this.router.navigate(['']);
      }
    })
  }

  login(data) {
    console.log(data);
    this.auth.login(data);
  }

}
