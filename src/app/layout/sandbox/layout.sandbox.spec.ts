import { TestBed } from '@angular/core/testing';
import { LayoutSandbox } from '@app/layout/sandbox/layout.sandbox';
import {
    HideConfirmationModal, ResetNotification, RootState, ToggleSideBarVisibility
} from '@app/root/store';
import { Store, StoreModule } from '@ngrx/store';

describe('LayoutSandbox', () => {
  let sandbox: LayoutSandbox;
  let store: Store<RootState>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [LayoutSandbox],
    });
    sandbox = TestBed.get(LayoutSandbox);
    sandbox.navigation = [];
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  test('should be created', () => {
    expect(sandbox).toBeTruthy();
  });

  test('should dispatch a ToggleSideBarVisibility action', () => {
    const action = new ToggleSideBarVisibility();
    sandbox.toggleSidebar();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch a ResetNotification action', () => {
    const action = new ResetNotification();
    sandbox.onCloseNotification();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch a HideConfirmationModal action', () => {
    const action = new HideConfirmationModal();
    sandbox.closeModal();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
