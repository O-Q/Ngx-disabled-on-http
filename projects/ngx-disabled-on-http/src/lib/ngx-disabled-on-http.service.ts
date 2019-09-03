import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgxDisabledOnHttpService {
  static BASE_URL = '';
  disabledButtons = new Map<string, BehaviorSubject<boolean>>();

  getIdFromUrl(url: string) {
    return url.replace(NgxDisabledOnHttpService.BASE_URL, '').split('?')[0];
  }
}
