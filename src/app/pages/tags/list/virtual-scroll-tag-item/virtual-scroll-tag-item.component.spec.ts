import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ConfigServiceMock } from '@shared/mocks';
import { SharedModule } from '@shared/shared.module';

import { VirtualScrollTagItemComponent } from './virtual-scroll-tag-item.component';

describe('VirtualScrollTagItemComponent', () => {
  let component: VirtualScrollTagItemComponent;
  let fixture: ComponentFixture<VirtualScrollTagItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), SharedModule],
      declarations: [VirtualScrollTagItemComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollTagItemComponent);
    component = fixture.componentInstance;
    component.item = { id: 1, name: 'name', cultures: { es: 'lorem' } };
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should return track culture code', () => {
    const { es } = ConfigServiceMock.settings.cultures;
    expect(component.trackByCulture(0, es)).toEqual(es.code);
  });
});
