import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class StatisticsService {


  constructor(private http: Http) {



  }

  private getOptions(): RequestOptions {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return new RequestOptions({ headers });
  }


  public getActionsCount() {
    return this.http.get(`${environment.url}statistics/actions/count`, this.getOptions())
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

  public getPickedUpTodayGroupedByHour() {
    return this.http.get(`${environment.url}statistics/custom/picked_up_today_grouped_by_hour`, this.getOptions())
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

  public getScannedTodayGroupedByHour() {
    return this.http.get(`${environment.url}statistics/custom/scanned_today_grouped_by_hour`, this.getOptions())
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

    public getPressedTodayGroupedByHour() {
        return this.http.get(`${environment.url}statistics/custom/pressed_today_grouped_by_hour`, this.getOptions())
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
