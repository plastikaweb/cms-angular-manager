import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '@app/layout/components/header/header.component';
import {
    NavigationTriggerComponent
} from '@app/layout/components/navigation-trigger/navigation-trigger.component';
import { NavigationComponent } from '@app/layout/components/navigation/navigation.component';
import { LayoutRoutingModule } from '@app/layout/layout-routing.module';
import { LayoutComponent } from '@app/layout/layout.component';
import { SharedModule } from '@shared/shared.module';

import { NgProgressModule } from '@ngx-progressbar/core';
import { ButtonsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import {
    PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';

import { ActivitybarComponent } from './components/activitybar/activitybar.component';
import { NotificationComponent } from './components/notification/notification.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationTriggerComponent,
    ActivitybarComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    ButtonsModule.forRoot(),
    PerfectScrollbarModule,
    NgProgressModule.withConfig({
      thick: true,
      spinner: false,
    }),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class LayoutModule {}
