import { Injectable } from '@angular/core';
import {RequestOptions, Http, Headers, Response} from "@angular/http";
import {url} from "../../../constants";

@Injectable()
export class SettingsService {

  private postSettings: RequestOptions;

  constructor(private http: Http) {

    const headers = new Headers();

    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    this.postSettings = new RequestOptions({ headers });
  }

  public postKanAanpassen()
  {
    return this.postSetting('kan_aanpassen');
  }

  public postSetting(key: string)
  {
    return this.http.post(`${url}${key}/toggle`, null, this.postSettings)
        .map((res: Response) => res.json())
        .map((res: any) => {
          return res;
        })
  }

}
