import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {LoginService} from "../services/login/login.service";
import {Observable, Subscription} from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate {

    public static check(): boolean {
        return !!localStorage.getItem('token');
    }

    constructor(private router: Router,
                private loginService: LoginService) {}

    canActivate(): Observable<boolean> {
        return this.loginService.check();
    }

    public redirect(url:string = '/'): void {
        this.router.navigateByUrl(url);
    }
}