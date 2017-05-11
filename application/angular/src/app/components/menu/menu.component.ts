import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {LoginGuard} from "../../guards/login.guard";
import {Router} from "@angular/router";
import {User} from "../../interfaces/user.interface";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
@AutoUnsubscribe()
export class MenuComponent implements OnInit {

  public loggedIn: boolean;
  public user: User;
  public collapsed: boolean = false;
  public url: string;

  private paramSubscription: Subscription;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.paramSubscription = this.router.events.subscribe((url: any) => {
      this.loggedIn = LoginGuard.check();
      if (typeof(url.url) !== 'undefined') {
        this.url = url.url;
      }
    });

    this.loggedIn = LoginGuard.check();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  public logout(): void {
    this.loginService.logout();
    this.loggedIn = false;
    this.toggleMenu(true);
  }

  public toggleMenu(force: boolean = false): void {
    if (force) {
      this.collapsed = true;
    }

    this.collapsed = !this.collapsed;
  }

}
