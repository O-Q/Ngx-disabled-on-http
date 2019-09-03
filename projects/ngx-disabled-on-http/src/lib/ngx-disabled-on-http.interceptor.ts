import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
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
  constructor(private service: NgxDisabledOnHttpService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const id = this.service.getIdFromUrl(request.url);
    return next.handle(request).pipe(
      finalize(() => {
        if (!this.service.disabledButtons[id]) {
          this.service.disabledButtons[id] = new BehaviorSubject(false);
        }
        const disabledButton = this.service.disabledButtons[id];
        if (disabledButton) {
          disabledButton.next(true);
        }
      })
    );
  }
}
