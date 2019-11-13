import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from '@shared/components/card/card.module';

import { MainContentContainerComponent } from './main-content-container.component';

describe('MainContentContainerComponent', () => {
  let component: MainContentContainerComponent;
  let fixture: ComponentFixture<MainContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainContentContainerComponent],
      imports: [BrowserAnimationsModule, CardModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });
});
