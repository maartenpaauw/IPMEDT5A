import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from "@angular/router";
import {RoutingModule} from "./modules/routing.module";

import { AppComponent } from './app/app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {LoginService} from "./services/login/login.service";
import {LoginGuard} from "./guards/login.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule,
    RouterModule
  ],
  providers: [
    LoginService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
