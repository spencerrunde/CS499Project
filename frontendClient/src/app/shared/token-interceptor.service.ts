import { Injectable, Injector } from '@angular/core';

import { AuthService } from './auth.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: any, next: any) {
    let authService = this.injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`, // Takes token from local storage and passes its value into the Authorization header
      },
    });
    return next.handle(tokenizedReq);
  }
}
