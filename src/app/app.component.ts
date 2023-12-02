import { Component, inject } from '@angular/core';
import { SharedService } from 'projects/shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell-16';
  countService = inject(SharedService)

  count$ = this.countService.count$;
}
