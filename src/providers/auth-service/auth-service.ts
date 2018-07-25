import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private url:string = "api/users";
  private springUrl = "localhost:8080/resource";

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  /*public login(uname:string,pw:string):Promise<boolean>{
    this.http.get(url).toPromise().then(
      res => res.json() as 
    )
  }*/

  public test():void{
    this.http.get(this.springUrl).subscribe(data => console.log(data));
  }

}
