import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-content-container',
  templateUrl: './main-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'scale(0.99)' }),
        animate(250, style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class MainContentContainerComponent {}
