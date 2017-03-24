import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {LoginService} from "../services/login/login.service";
import {Observable} from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate {

    public static check(): boolean {
        return !!localStorage.getItem('token');
    }

    constructor(private router: Router,
                private loginService: LoginService) {}

    canActivate(): boolean {
        this.loginService.check().subscribe(
            (res) => {
                return true;
            },
            (err) => {
                this.redirect('/login');
                return false;
            }
        );

        return true;
    }

    public redirect(url:string = '/dashboard'): void {
        this.router.navigateByUrl(url);
    }
}