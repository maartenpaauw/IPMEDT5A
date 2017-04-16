import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {LoginService} from "../../services/login/login.service";

import {LoginGuard} from "../../guards/login.guard";
import {Title} from "@angular/platform-browser";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
@AutoUnsubscribe()
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  public msg: string;

  private loginSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private loginGuard: LoginGuard,
              private titleService: Title) { }

  ngOnInit() {
    if (LoginGuard.check()) {
      this.loginGuard.redirect();
    }

    this.titleService.setTitle('Inloggen — IPMEDT5A');

    this.loginForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      'password': [null, Validators.required]
    });
  }

  public submitForm(value: Object)
  {
    this.loginSubscription = this.loginService.login(value).subscribe(
      (res: any) => {
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
