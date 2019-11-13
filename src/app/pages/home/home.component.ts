import { Component } from '@angular/core';

import { HomeSandbox } from './sandbox/home.sandbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  pageConfig$ = this.sandbox.pageConfig$;
  constructor(private sandbox: HomeSandbox) {}
}
