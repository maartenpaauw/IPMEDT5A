import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Shelf} from "../../interfaces/shelf.interface";

@Injectable()
export class ShelvesService {

  private getOptions: RequestOptions;

  constructor(private http: Http) {

    const headers = new Headers();

    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    this.getOptions = new RequestOptions({ headers });

  }

  public getShelves(): Observable<boolean | number> {
      return this.http.get(`${environment.url}shelves`, this.getOptions)
          .map((res: Response) => res.json())
          .map((res: any) => {
              return res;
          })
          .catch((error: any) => {
              if (error.status == 401) {
                  return Observable.throw(error.status);
              } else if (error.status == 500) {
                  return Observable.throw(error.status);
              }
          });
  }

    public getShelf(mac_address: string): Observable<Shelf | number> {
        return this.http.get(`${environment.url}shelves/${mac_address}`, this.getOptions)
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

    public linkDemo(mac_address: string, uuid: string) {
      return this.http.post(`${environment.url}shelves/${mac_address}/demos/${uuid}/link`, null,this.getOptions)
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
