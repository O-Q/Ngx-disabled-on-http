import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxDisabledOnHttpModule } from 'projects/ngx-disabled-on-http/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, NgxDisabledOnHttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
