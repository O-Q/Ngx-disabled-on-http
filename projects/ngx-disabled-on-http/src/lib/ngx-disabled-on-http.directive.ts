import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NgxDisabledOnHttpService } from './ngx-disabled-on-http.service';

@Directive({
  selector: '[NgxDisabledOnHttp]'
})
export class NgxDisabledOnHttpDirective {
  @Input('NgxDisabledOnHttp') disabledOnHttp: string;
  // @Input() disabledIf: boolean;
  constructor(
    private element: ElementRef,
    private service: NgxDisabledOnHttpService
  ) { }

  @HostListener('click') onClick() {
    this._disableButton();
  }

  private _disableButton() {
    if (this.disabledOnHttp) {
      // if (this.disabledIf !== false) {
      this.element.nativeElement.disabled = true;
      const id = this.service.getIdFromUrl(this.disabledOnHttp);
      this.service.disabledButtons[id] = new Subject();
      this.service.disabledButtons[id]
        .pipe(takeWhile((r: boolean) => !r, true))
        .subscribe((isComplete: boolean) => {
          if (isComplete) {
            this.element.nativeElement.disabled = false;
            delete this.service.disabledButtons[id];
          }
        });
      // }
    } else {
      console.error('URL can\'t be null or empty');
    }
  }
}
