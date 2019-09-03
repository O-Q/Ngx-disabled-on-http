import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private api: ApiService) {}
  name = 'Disabled On Http Library';
  url = this.api.factCatsUrl;
  status = '';

  onButtonClicked() {
    this.status = 'Requesting server...';
    this.api
      .testGetSome()
      .pipe(finalize(() => (this.status = 'Done!')))
      .subscribe(result => console.log(result));
  }
}
