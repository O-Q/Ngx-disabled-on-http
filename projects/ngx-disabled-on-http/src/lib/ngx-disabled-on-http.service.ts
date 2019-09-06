import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgxDisabledOnHttpService {
  private disabledButtons = new Map<string, Subject<boolean>>();

  addButton(url: string): Observable<boolean> {
    const standardizedUrl = this._getIdFromUrl(url);
    this.disabledButtons[standardizedUrl] = new Subject<boolean>();
    return this.disabledButtons[standardizedUrl].asObservable();
  }
  getButton(url: string): Subject<boolean> {
    return this.disabledButtons[this._getIdFromUrl(url)];
  }
  deleteButton(url: string): void {
    delete this.disabledButtons[this._getIdFromUrl(url)];
  }

  private _getIdFromUrl(url: string) {
    return url.toLowerCase().split('//').pop().split('www').pop().split('?')[0];
  }
}
