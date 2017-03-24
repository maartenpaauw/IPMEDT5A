import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate {

    public static check(): boolean {
        return !!localStorage.getItem('token');
    }

    constructor(private router: Router) {}

    canActivate(): boolean {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.redirect('/login');
        return false;
    }

    public redirect(url:string = '/'): void {
        this.router.navigateByUrl(url);
    }
}