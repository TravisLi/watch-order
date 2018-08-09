import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/order';
import { Observable } from 'rxjs';

/*
  Generated class for the OrderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare const ENV;

@Injectable()
export class OrderService {

  private orderUrl:string = ENV.restUrl + "/order";

  constructor(public http: HttpClient) {
    console.log('Hello OrderServiceProvider Provider');
  }

  public getOrder(custId:string):Observable<Order[]>{
    let parm:string = '/${custId}/'
    let reqUrl:string = this.orderUrl + parm
    return this.http.get<Order[]>(reqUrl);
  }

}
