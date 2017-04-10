import { Injectable } from '@angular/core';
import {RequestOptions, Http, Headers, Response} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Setting} from "../../interfaces/setting.interface";

@Injectable()
export class SettingsService {

  private postSettings: RequestOptions;

  constructor(private http: Http) {

    const headers = new Headers();

    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    this.postSettings = new RequestOptions({ headers });
  }

  public getSettings(): Observable<Array<Setting> | number>
  {
    return this.http.get(`${environment.url}settings`, this.postSettings)
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

    public getSetting(setting: string): Observable<Setting | number>
    {
        return this.http.get(`${environment.url}settings/${setting}`, this.postSettings)
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

  public toggleSetting(key: string): Observable<Setting | number>
  {
    return this.http.post(`${environment.url}settings/${key}/toggle`, null, this.postSettings)
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
