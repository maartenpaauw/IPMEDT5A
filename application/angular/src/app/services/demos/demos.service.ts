import { Injectable } from '@angular/core';
import {RequestOptions, Headers, Http, Response} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Demo} from "../../interfaces/demo.interface";

@Injectable()
export class DemosService {

  constructor(private http: Http) {}

  private static getHeaders(): RequestOptions {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return new RequestOptions({ headers });
  }

  public storeDemos(data: Object): Observable<Demo | number> {
    return this.http.post(`${environment.url}demos`, data, DemosService.getHeaders())
        .map((res: Response) => res.json())
        .map((res: any) => {
          return res.data;
        })
        .catch((error: any) => {
          if (error.status == 401) {
            return Observable.throw(error.status);
          } else if (error.status == 500) {
            return Observable.throw(error.status);
          }
        });
  }

}
