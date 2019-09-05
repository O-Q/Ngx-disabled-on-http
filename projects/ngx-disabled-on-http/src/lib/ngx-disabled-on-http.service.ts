import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgxDisabledOnHttpService {
  disabledButtons = new Map<string, Subject<boolean>>();

  getIdFromUrl(url: string) {
    return url.split('?')[0];
  }
}
