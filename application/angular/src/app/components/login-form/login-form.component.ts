import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {LoginService} from "../../services/login/login.service";

import {LoginGuard} from "../../guards/login.guard";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  public msg: string;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private loginGuard: LoginGuard) { }

  ngOnInit() {
    if (LoginGuard.check()) {
      this.loginGuard.redirect();
    }

    this.loginForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      'password': [null, Validators.required]
    });
  }

  private submitForm(value: Object)
  {
    this.loginService.login(value).subscribe(
      (res: any) => {
        //TODO: route aanpassen.
        this.loginGuard.redirect();
      },
      (err: number) => {
        if (err === 401) {
          this.msg = 'Login gegevens incorrect!';
        } else if (err === 500) {
          this.msg = 'Probeer het later nog eens!';
        }
      }
    );
  }
}
