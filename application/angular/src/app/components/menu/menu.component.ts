import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {LoginGuard} from "../../guards/login.guard";
import {Router} from "@angular/router";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public loggedIn: boolean;
  public user: User;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.loggedIn = LoginGuard.check();
    });

    this.loggedIn = LoginGuard.check();
    this.user = <User>JSON.parse(localStorage.getItem('user'));
  }

  public logout(): void {
    this.loginService.logout();
    this.loggedIn = false;
  }
}
