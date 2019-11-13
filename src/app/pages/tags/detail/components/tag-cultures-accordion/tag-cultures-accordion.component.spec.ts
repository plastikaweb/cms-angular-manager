import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ConfigServiceMock, tagsMock, updateTagPayload } from '@shared/mocks';
import { SharedModule } from '@shared/shared.module';

import { AccordionModule } from 'ngx-bootstrap';

import { TagCulturesAccordionComponent } from './tag-cultures-accordion.component';

describe('TagCulturesAccordionComponent', () => {
  let component: TagCulturesAccordionComponent;
  let fixture: ComponentFixture<TagCulturesAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagCulturesAccordionComponent],
      imports: [
        AccordionModule.forRoot(),
        SharedModule,
        RouterModule.forRoot([]),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCulturesAccordionComponent);
    component = fixture.componentInstance;
    component.tag = { ...tagsMock[0] };
    fixture.detectChanges();
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should emit emitTagUpdate', () => {
    let updateAction = null;
    component.emitTagUpdate.subscribe(action => (updateAction = action));
    component.sendTag(updateTagPayload);
    expect(updateAction).toEqual(updateTagPayload);
  });

  test('should emit emitTagCreate', () => {
    let createAction = null;
    const { id, ...createTagPayload } = updateTagPayload;
    component.tag = null;
    component.emitTagCreate.subscribe(action => (createAction = action));
    component.sendTag(createTagPayload);
    expect(createAction).toEqual(createTagPayload);
  });

  test('should return an updated model tag', () => {
    const cultureCode = 'en';
    expect(component.getModel(cultureCode)).toEqual({
      id: component.tag.id,
      cultures: {
        [cultureCode]: component.tag.cultures[cultureCode],
      },
    });
  });

  test('should return a changed warning', () => {
    let changedAction = false;
    component.emitTagChanged.subscribe(action => (changedAction = action));
    component.hasChanged(true);
    expect(changedAction).toBeTruthy();
  });

  test('should return a new model tag', () => {
    const cultureCode = 'en';
    component.tag = null;
    expect(component.getModel(cultureCode)).toEqual({
      cultures: {
        [cultureCode]: {},
      },
    });
  });

  describe('should check existence for a defined tag culture', () => {
    test('if exists should return true', () => {
      expect(component.cultureDone('en')).toBeTruthy();
    });
    test('if not exists should return false', () => {
      expect(component.cultureDone('fr')).toBeFalsy();
    });
  });

  test('should change selectedCulture', () => {
    component.clickGroup('es');
    expect(component.selectedCulture).toEqual('es');
  });

  test('should return track culture code', () => {
    const { es } = ConfigServiceMock.settings.cultures;
    expect(component.trackByCulture(0, es)).toEqual(es.code);
  });
});
