import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../models/Customer';
import { Observable } from 'rxjs';

/*
  Generated class for the CustomerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare const ENV;

@Injectable()
export class CustomerService {

  private custUrl:string = ENV.restUrl + "/customer";

  constructor(public http: HttpClient) {
    console.log('Hello CustomerService Provider');
  }

  public searchCustomers(name:string):Observable<Customer[]>{
    let parm:string = '/${name}/'
    let reqUrl:string = this.custUrl + parm
    return this.http.get<Customer[]>(reqUrl);
  }

}
