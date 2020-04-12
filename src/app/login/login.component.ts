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
      username: ['admin1234', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  login(data) {
    this.auth.login(data);
  }

}
