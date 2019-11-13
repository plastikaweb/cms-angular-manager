import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationTypes } from '@shared/models';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { NotificationComponent } from './notification.component';

import { of } from 'rxjs';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let toastrService: ToastrService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      declarations: [NotificationComponent],
      providers: [
        {
          provide: ToastrService,
          useValue: {
            overlayContainer: jest.mock,
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.get(ToastrService);
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should assign toastr container', () => {
    component.showNotification$ = of({
      title: 'Title',
      message: '404',
      type: NotificationTypes.error,
      config: {},
    });
    component.ngOnInit();
    fixture.detectChanges();

    expect(toastrService.overlayContainer).toBe(component.toastContainer);
  });
});
