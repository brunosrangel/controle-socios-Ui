import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private _authService : AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this._authService.obterTokenUsuario;
        const requestUrl: Array<any> = request.url.split('/');
        const apiUrl: Array<any> = environment.apiUrl.split('/');

        if (token && requestUrl[2] === apiUrl[2]) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    token: `${token}`
                }
            });
            return next.handle(request).pipe(
              catchError(error => {
                  if (error instanceof HttpErrorResponse && error.status === 401) {
                      this._authService.deslogar();
                  }
                  return throwError(error.message); // ou outro Observable de erro
              })
          );
            // return next.handle(request).pipe(catchError(error => {
            //     if (error instanceof HttpErrorResponse && error.status === 401)
            //       this._authService.deslogar();
            //     else
            //       return throwError(error.message);
            // }));
        }

        else {
            return next.handle(request);
        }
    }
}
