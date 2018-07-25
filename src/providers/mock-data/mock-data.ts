import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../../models/User';
import { Customer } from '../../models/Customer';
import { Order } from '../../models/Order';


/*
  Generated class for the MockDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MockDataProvider implements InMemoryDbService {

  constructor(public http: HttpClient) {
    console.log('Hello MockDataProvider Provider');
  }

  public createDb():{}{
    let users:User[] = [
      {
        id: "1",
        name: "test1",
        pwd: "test1"
      },
      {
        id: "2",
        name: "test2",
        pwd: "test2"
      }
    ]

    let custs: Customer[] = [
      {
        id:"1",
        name: "cust1",
        orders: [
          {
            id:"1",
            product:"watch1",
          }
        ]
      },
      {
        id:"2"
        cname: "cust2",
        }
    ]

    let orders = [
      {
        id:"1"
        product: "watch1",
      },
      {
        id:"2"
        product: "watch2",
        }
    ]

    return {users, custs, orders}
  }
  

}
