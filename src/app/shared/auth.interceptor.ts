

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.debug('xxxx');

        if (req.url.startsWith('http://www.angular.at/api/')) {
            const headers = req.headers.set('Authorization', 'BEARER safdlsadfsadfdsa==');
            req = req.clone({ headers });
        }


        return next.handle(req).pipe(
            tap(resp => console.debug('resp', resp))
        );
    }
}

// Interceptor1 -- next --> Interceptor2 -- next --> HTTP Call

// Kwinten Pissmann, Dominick Elm