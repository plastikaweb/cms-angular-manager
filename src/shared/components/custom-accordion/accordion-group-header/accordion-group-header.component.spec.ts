import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeModule } from '@shared/components/badge/badge.module';

import { AccordionGroupHeaderComponent } from './accordion-group-header.component';

describe('AccordionGroupHeaderComponent', () => {
  let component: AccordionGroupHeaderComponent;
  let fixture: ComponentFixture<AccordionGroupHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionGroupHeaderComponent],
      imports: [BadgeModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupHeaderComponent);
    component = fixture.componentInstance;
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });
});
