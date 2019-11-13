import * as fromSelectors from '@app/root/store/selectors';
import { uiMockState } from '@shared/mocks';

describe('UI selectors', () => {
  test('should return Sidebar Visibility', () => {
    expect(fromSelectors.getUISidebarVisibility.projector(uiMockState)).toBe(
      uiMockState.sidebarVisibility
    );
  });

  test('should return Notification data', () => {
    expect(fromSelectors.getUINotification.projector(uiMockState)).toBe(
      uiMockState.notification
    );
  });

  test('should return ConfirmationModal data', () => {
    expect(fromSelectors.getUIConfirmationModal.projector(uiMockState)).toBe(
      uiMockState.confirmationModal
    );
  });

  test('should return RouterActivity value', () => {
    expect(fromSelectors.getUIRouterActivity.projector(uiMockState)).toBe(
      uiMockState.routerActivity
    );
  });

  test('should return main activity value', () => {
    expect(fromSelectors.getActivity.projector(true, false)).toBeTruthy();
    expect(fromSelectors.getActivity.projector(true, true)).toBeTruthy();
    expect(fromSelectors.getActivity.projector(false, false)).toBeFalsy();
  });
});
