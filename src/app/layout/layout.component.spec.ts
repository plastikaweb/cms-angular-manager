import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@app/layout/components/header/header.component';
import {
    NavigationTriggerComponent
} from '@app/layout/components/navigation-trigger/navigation-trigger.component';
import { NavigationComponent } from '@app/layout/components/navigation/navigation.component';
import { LayoutComponent } from '@app/layout/layout.component';
import { LayoutSandbox } from '@app/layout/sandbox/layout.sandbox';
import { UiState } from '@app/root/store/reducers/ui/ui.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

import { NgProgressModule } from '@ngx-progressbar/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ToastrModule } from 'ngx-toastr';

import { ActivitybarComponent } from './components/activitybar/activitybar.component';
import { NotificationComponent } from './components/notification/notification.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let sandbox: LayoutSandbox;
  let store: Store<UiState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        StoreModule.forRoot({}),
        ToastrModule.forRoot(),
        PerfectScrollbarModule,
        NgProgressModule,
        SharedModule,
      ],
      declarations: [
        LayoutComponent,
        HeaderComponent,
        NavigationComponent,
        NavigationTriggerComponent,
        ActivitybarComponent,
        NotificationComponent,
      ],
      providers: [
        {
          provide: LayoutSandbox,
          useValue: {
            toggleSidebar: jest.fn(),
            onCloseNotification: jest.fn(),
            closeModal: jest.fn(),
          },
        },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.debugElement.componentInstance;
    sandbox = TestBed.get(LayoutSandbox);
    store = TestBed.get(Store);
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should dispatch a toggleSidebar action', () => {
    component.toggleSidebar();
    expect(sandbox.toggleSidebar).toHaveBeenCalled();
  });

  test('should dispatch a onCloseNotification action', () => {
    component.onCloseNotification();
    expect(sandbox.onCloseNotification).toHaveBeenCalled();
  });

  test('should dispatch a HideConfirmationModal action', () => {
    component.closeModal();
    expect(sandbox.closeModal).toHaveBeenCalled();
  });
});
