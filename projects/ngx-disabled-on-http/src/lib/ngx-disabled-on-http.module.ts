import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxDisabledOnHttpInterceptor } from './ngx-disabled-on-http.interceptor';
import { NgxDisabledOnHttpDirective } from './ngx-disabled-on-http.directive';
import { NgxDisabledOnHttpService } from './ngx-disabled-on-http.service';
@NgModule({
  declarations: [NgxDisabledOnHttpDirective],
  exports: [NgxDisabledOnHttpDirective],
  imports: [HttpClientModule]
})
export class NgxDisabledOnHttpModule {
  static register(
    baseUrl: string
  ): ModuleWithProviders<NgxDisabledOnHttpModule> {
    NgxDisabledOnHttpService.BASE_URL = baseUrl;
    return {
      ngModule: NgxDisabledOnHttpModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: NgxDisabledOnHttpInterceptor,
          multi: true
        }
      ]
    };
  }
}
