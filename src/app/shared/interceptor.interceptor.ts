import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, Subject, catchError, observable, of, tap, throwError } from 'rxjs';
import { error } from 'jquery';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  value = 500;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const headers = new HttpHeaders().set('authorization', this.session.obterGuid());
    //request = request.clone({ headers });
    return next.handle(request)
      .pipe(
        tap({
          error: e => {
            if (e.status >= 500) {
              console.log(e);
              console.log(request);
              throwError(e);
            }
          }
        })
        /*catchError( (error: HttpErrorResponse) => {
              let errorMsg = '';
              return throwError(errorMsg);
            } )*/
      )
  }
}
