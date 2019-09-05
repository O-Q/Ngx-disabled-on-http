import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxDisabledOnHttpInterceptor } from './ngx-disabled-on-http.interceptor';
import { NgxDisabledOnHttpDirective } from './ngx-disabled-on-http.directive';
@NgModule({
  declarations: [NgxDisabledOnHttpDirective],
  exports: [NgxDisabledOnHttpDirective],
  imports: [HttpClientModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NgxDisabledOnHttpInterceptor,
    multi: true
  }]
})
export class NgxDisabledOnHttpModule { }
