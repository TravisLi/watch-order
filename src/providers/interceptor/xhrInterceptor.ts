import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import { map } from 'rxjs/operators';

/*
  Generated class for the InterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const newReq = req.clone({withCredentials: true, headers: req.headers.set('Authorization', 'Basic: ' + btoa('user:password'))});
    console.log(newReq);    
    return next.handle(newReq).do(
          (ev) => {
            console.log(ev);
          }
        )
  }

}
