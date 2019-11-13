import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppSandbox } from '@app/root/sandbox/app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private sandbox: AppSandbox) {}
}
