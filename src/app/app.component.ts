import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Disabled On Http Library';
  url = this.api.factCatsUrl;
  status = '';
  constructor(private api: ApiService) { }

  onButtonClicked() {
    this.status = 'Requesting server...';
    this.api
      .testGetSome()
      .pipe(finalize(() => (this.status = 'Done!')))
      .subscribe(result => console.log(result));
  }
}
