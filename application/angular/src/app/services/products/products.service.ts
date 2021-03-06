import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class ProductsService {

  private getOptions: RequestOptions;

  constructor(private http: Http) {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    this.getOptions = new RequestOptions({ headers });
  }

  public getProducts() {
    return this.http.get(`${environment.url}products`, this.getOptions)
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

  public uploadProducts(data: FormData) {
    return this.http.post(`${environment.url}products/upload`, data, this.getOptions)
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
