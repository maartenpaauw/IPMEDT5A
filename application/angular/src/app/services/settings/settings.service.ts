import { Injectable } from '@angular/core';
import {RequestOptions, Http, Headers, Response} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class SettingsService {

  private postSettings: RequestOptions;

  constructor(private http: Http) {

    const headers = new Headers();

    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    this.postSettings = new RequestOptions({ headers });
  }

  public getKanAanpassen() {
    return this.getSetting('kan_aanpassen');
  }

  public toggleKanAanpassen()
  {
    return this.toggleSetting('kan_aanpassen');
  }

  private getSetting(key)
  {
    return this.http.get(`${environment.url}settings/${key}`, this.postSettings)
        .map((res: Response) => res.json())
        .map((res: any) => {
          return res;
        })
  }

  private toggleSetting(key: string)
  {
    return this.http.post(`${environment.url}settings/${key}/toggle`, null, this.postSettings)
        .map((res: Response) => res.json())
        .map((res: any) => {
          return res;
        })
  }

}
