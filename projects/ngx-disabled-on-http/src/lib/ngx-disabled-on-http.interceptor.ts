import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { NgxDisabledOnHttpService } from './ngx-disabled-on-http.service';

@Injectable()
export class NgxDisabledOnHttpInterceptor implements HttpInterceptor {
  constructor(private service: NgxDisabledOnHttpService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(() => {
          const disabledButton = this.service.getButton(request.url);
          if (disabledButton) {
            disabledButton.next(true);
          }
        }, 250);
      })
    );
  }
}
