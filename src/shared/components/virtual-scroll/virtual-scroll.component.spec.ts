import { ScrollingModule } from '@angular/cdk/scrolling';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesModule } from '@shared/pipes/pipes.module';

import { VirtualScrollComponent } from './virtual-scroll.component';

describe('VirtualScrollComponent', () => {
  let component: VirtualScrollComponent;
  let fixture: ComponentFixture<VirtualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PipesModule, ScrollingModule],
      declarations: [VirtualScrollComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollComponent);
    component = fixture.componentInstance;
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should return track idx', () => {
    expect(component.trackByIdx(3)).toEqual(3);
  });
});
