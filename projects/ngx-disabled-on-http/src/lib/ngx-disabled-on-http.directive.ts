import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NgxDisabledOnHttpService } from './ngx-disabled-on-http.service';

@Directive({
  selector: '[NgxDisabledOnHttp]'
})
export class NgxDisabledOnHttpDirective {
  @Input('NgxDisabledOnHttp') url: string;
  // @Input() disabledIf: boolean;
  constructor(
    private element: ElementRef,
    private service: NgxDisabledOnHttpService
  ) { }

  @HostListener('click') onClick() {
    this._disableButton();
  }

  private _disableButton() {
    if (this.url) {
      // if (this.disabledIf !== false) {
      this.element.nativeElement.disabled = true;
      const buttonObservable = this.service.addButton(this.url);
      buttonObservable.pipe(takeWhile((r: boolean) => !r, true))
        .subscribe((isComplete: boolean) => {
          if (isComplete) {
            this.element.nativeElement.disabled = false;
            this.service.deleteButton(this.url);
          }
        });
      // }
    } else {
      console.error('URL can\'t be null or empty');
    }
  }
}
