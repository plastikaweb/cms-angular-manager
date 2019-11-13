import {
    HideConfirmationModal, ResetNotification, SetRouterActivityOff, SetRouterActivityOn,
    ShowConfirmationModal, ShowNotificacion, ToggleSideBarVisibility
} from '@app/root/store/actions';
import * as fromUI from '@app/root/store/reducers/ui/ui.reducer';
import { uiMockState } from '@shared/mocks/ui.mock';

describe('UI reducer', () => {
  test('should return the default state on undefined Action', () => {
    const action = {} as any;
    const newState = fromUI.reducer(undefined, action);
    expect(newState).toBe(fromUI.initialState);
  });

  test('should handle the Toggle SideBar Action', () => {
    const newState = fromUI.reducer(
      fromUI.initialState,
      new ToggleSideBarVisibility()
    );
    expect(newState.sidebarVisibility).toEqual(uiMockState.sidebarVisibility);
  });

  describe('Notification Actions', () => {
    test('should handle the Show Action', () => {
      const newState = fromUI.reducer(
        fromUI.initialState,
        new ShowNotificacion(uiMockState.notification)
      );
      expect(newState.notification).toEqual(uiMockState.notification);
    });

    test('should handle the Hide Action', () => {
      const newState = fromUI.reducer(uiMockState, new ResetNotification());
      expect(newState.notification).toBeNull();
    });
  });

  describe('Confirmation Modal Actions', () => {
    test('should handle the Show Action', () => {
      const newState = fromUI.reducer(
        fromUI.initialState,
        new ShowConfirmationModal(uiMockState.confirmationModal)
      );
      expect(newState.confirmationModal).toEqual(uiMockState.confirmationModal);
    });

    test('should handle the Hide Action', () => {
      const newState = fromUI.reducer(uiMockState, new HideConfirmationModal());
      expect(newState.confirmationModal.visible).toBeFalsy();
    });
  });

  describe('Router Activity Actions', () => {
    test('should handle the Set RouterActivity On Action', () => {
      const newState = fromUI.reducer(
        fromUI.initialState,
        new SetRouterActivityOn()
      );
      expect(newState.routerActivity).toBeTruthy();
    });

    test('should handle the Set RouterActivity Off Action', () => {
      const newState = fromUI.reducer(
        fromUI.initialState,
        new SetRouterActivityOff()
      );
      expect(newState.routerActivity).toBeFalsy();
    });
  });
});
