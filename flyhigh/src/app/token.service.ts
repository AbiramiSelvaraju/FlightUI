import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginUrl = 'authenticate'
    const token = localStorage.getItem('token');
    let newHeaders = req.headers;
    if (req.url.search(loginUrl) === -1 ) {
      console.log('INTERCEPTOR');
      newHeaders = req.headers.append('token', `Bearer ${token}`)
      .append('Content-type', 'application/json');
    return next.handle(req.clone({headers: newHeaders}));
    }
    return next.handle(req);
    
  }
}
