import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { TagsSandbox } from '@app/pages/tags/sandbox/tags.sandbox';
import { StoreModule } from '@ngrx/store';
import { ConfigServiceMock } from '@shared/mocks';
import { SharedModule } from '@shared/shared.module';

import {
    TagCulturesAccordionModule
} from './components/tag-cultures-accordion/tag-cultures-accordion.module';
import { TagDetailComponent } from './tag-detail.component';

describe('TagDetailComponent', () => {
  let component: TagDetailComponent;
  let fixture: ComponentFixture<TagDetailComponent>;
  let sandbox: TagsSandbox;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagDetailComponent],
      imports: [
        SharedModule,
        StoreModule.forRoot({}),
        RouterModule.forRoot([]),
        TagCulturesAccordionModule,
      ],
      providers: [
        {
          provide: TagsSandbox,
          useValue: {
            getTags: jest.fn(),
            updateTag: jest.fn(),
            createTag: jest.fn(),
            goTo: jest.fn(),
            sendHasChanged: jest.fn(),
            getCultures: jest.fn(() => ConfigServiceMock.settings.cultures),
          },
        },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDetailComponent);
    component = fixture.componentInstance;
    sandbox = TestBed.get(TagsSandbox);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call sendHasChanged sandbox method', () => {
    component.emitTagHasChanged(true);
    expect(sandbox.sendHasChanged).toHaveBeenCalledWith(true);
  });
  test('should call updateTag sandbox method', () => {
    const tag = { id: 1, name: 'tag' };
    component.updateTag(tag);
    expect(sandbox.updateTag).toHaveBeenCalledWith(tag);
  });

  test('should call createTag sandbox method', () => {
    const tag = { name: 'tag' };
    component.createTag(tag);
    expect(sandbox.createTag).toHaveBeenCalledWith(tag);
  });
});
