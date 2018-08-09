import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { ENV } from '@app/env';

/*
  Generated class for the AuthService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthService {

  private loginUrl:string = ENV.restUrl + "/login";
  private user:User;

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(username:string, pwd:string):Observable<User>{
    let parm:string = `/${username}/${pwd}/`
    let reqUrl:string = this.loginUrl + parm
    console.log(username);
    console.log(pwd);
    console.log(reqUrl);
    
    return this.http.get<User>(reqUrl);
  }

  public logout():Observable<boolean>{
    this.user = null;
    return new Observable<boolean>((ob)=>{
      ob.next(true);
      ob.complete();
    });
  }

  public getUser():User{
    return this.user;
  }

  public setUser(user:User){
    this.user = user;
  }

}
