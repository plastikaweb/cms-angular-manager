import { TestBed } from '@angular/core/testing';
import { SetPendingEntity } from '@app/entities/global/store/actions/global-entities.actions';
import { ChangePaginationFilterTags, CreateTag, UpdateTag } from '@app/entities/tags';
import { PagesState } from '@app/pages/store/reducers';
import { Store, StoreModule } from '@ngrx/store';
import { tagsMock } from '@shared/mocks';

import { TagsSandbox } from './tags.sandbox';

describe('TagsSandbox', () => {
  let sandbox: TagsSandbox;
  let store: Store<PagesState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [TagsSandbox],
    });
    sandbox = TestBed.get(TagsSandbox);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  test('should be created', () => {
    expect(sandbox).toBeTruthy();
  });

  test('should dispatch a SetPending action', () => {
    const action = new SetPendingEntity(true);
    sandbox.sendHasChanged(true);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch a ChangePaginationFilterTags action', () => {
    const action = new ChangePaginationFilterTags({
      params: { number: 1 },
      matchesCount: 12,
    });
    sandbox.getTags({ number: 1 }, 12);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch an UpdateTag action', () => {
    const payload = tagsMock[0];
    const { id, ...changes } = payload;
    const action = new UpdateTag({ id, changes });
    sandbox.updateTag(payload);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch a CreateTag action', () => {
    const payload = tagsMock[0];
    const action = new CreateTag(payload);
    sandbox.createTag(payload);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
