import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OpgepaktVandaagService {

  private getOptions: RequestOptions;

  constructor(private http: Http) {

    const headers = new Headers();

    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    this.getOptions = new RequestOptions({ headers });

  }

  public getPickedUpTodayGroupedByHour() {
    return this.http.get(`${environment.url}statistics/custom/picked_up_today_grouped_by_hour`, this.getOptions)
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
