import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers, RequestOptions, Response} from "@angular/http";

import {Login} from "../../interfaces/login.interface";
import {User} from "../../interfaces/user.interface";

import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class LoginService {

  private static headers(auth: boolean = false, json: boolean = false): RequestOptions {

    const headers = new Headers();

    if (auth) {
      headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    }

    if (json) {
      headers.append('Content-Type', 'multipart/json');
    }

    return new RequestOptions({ headers });
  }

  constructor(private http: Http,
              private router: Router) { }

  public login(data: Object): Observable<boolean | number> {
    return this.http.post(`${environment.url}authenticate`, data, LoginService.headers(false, true))
      .map((res: Response) => res.json())
      .map((res: Login) => {
        if (res.token.length > 0) {
          localStorage.setItem('token', res.token);
          return true;
        }

        return false;
      }).
      catch((error: any) => {
        if (error.status == 401) {
          return Observable.throw(error.status);
        } else if (error.status == 500) {
          return Observable.throw(error.status);
        }
      });
  }

  public logout() : void {
      localStorage.clear();
      this.router.navigateByUrl('/login');
  }

  public check(): Observable<boolean | number> {
    return this.http.post(`${environment.url}authenticate/check`, null, LoginService.headers(true))
        .map((res: Response) => res.json())
        .map((res: User) => {
          if (res.user) {
            localStorage.setItem('user', JSON.stringify(res.user));
            return true;
          }

          return false;
        }).
        catch((error: any) => {
          if (error.status <= 400) {
            return Observable.throw(error.status);
          }
        });
  }
}
