import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NgxDisabledOnHttpService } from './ngx-disabled-on-http.service';

@Directive({
  selector: '[NgxDisabledOnHttp]'
})
export class NgxDisabledOnHttpDirective {
  @Input('NgxDisabledOnHttp') disabledOnHttp: any;
  constructor(
    private element: ElementRef,
    private service: NgxDisabledOnHttpService
  ) {}

  @HostListener('click') onClick() {
    this.element.nativeElement.disabled = true;
    const id = this.service.getIdFromUrl(this.disabledOnHttp);

    if (!this.service.disabledButtons[id]) {
      this.service.disabledButtons[id] = new BehaviorSubject(false);
    }
    this.service.disabledButtons[id]
      .pipe(takeWhile((r: boolean) => !r, true))
      .subscribe((isComplete: boolean) => {
        if (isComplete) {
          this.element.nativeElement.disabled = false;
          delete this.service.disabledButtons[id];
        }
      });
  }
}
