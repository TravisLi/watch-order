import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

/*
  Generated class for the AuthService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare const ENV;
@Injectable()
export class AuthService {

  private loginUrl:string = ENV.restUrl + "/login";
  private user:User;

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(username:string, pwd:string):Observable<User>{
    let parm:string = '/${username}/${pwd}/'
    let reqUrl:string = this.loginUrl + parm
    return this.http.get<User>(reqUrl).do(user=>{
      this.user = user;
      return true;
    },error=>{
      console.log(error);
      return false;
    })
  }

  public logout():Observable<boolean>{
    this.user = null;
    return new Observable<boolean>((ob)=>{
      ob.next(true);
      ob.complete();
    });
  }

}
