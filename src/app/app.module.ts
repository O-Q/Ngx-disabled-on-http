import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL } from './services/api.service';
import { NgxDisabledOnHttpModule } from 'projects/ngx-disabled-on-http/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDisabledOnHttpModule.register(BASE_URL)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
