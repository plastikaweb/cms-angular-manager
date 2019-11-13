import * as fromActions from '@app/root/store/actions';
import { uiMockState } from '@shared/mocks';

describe('UI Actions', () => {
  test('should set the sidebar visibility', () => {
    const action = new fromActions.ToggleSideBarVisibility();
    expect({ ...action }).toEqual({
      type: fromActions.UIActionTypes.ToggleSidebarVisibility,
    });
  });

  test('should set the notification component visible', () => {
    const payload = uiMockState.notification;
    const action = new fromActions.ShowNotificacion(payload);
    expect({ ...action }).toEqual({
      type: fromActions.UIActionTypes.ShowNotificacion,
      payload,
    });
  });

  test('should set the notification component not visible', () => {
    const action = new fromActions.ResetNotification();
    expect({ ...action }).toEqual({
      type: fromActions.UIActionTypes.ResetNotification,
    });
  });

  test('should set the confirmation modal component configurated', () => {
    const payload = {
      id: 1,
      title: 'the title',
      visible: false,
      action: () => {},
    };
    const action = new fromActions.ShowConfirmationModal(payload);
    expect({ ...action }).toEqual({
      type: fromActions.UIActionTypes.ShowConfirmationModal,
      payload,
    });
  });

  test('should set the confirmation modal reset', () => {
    const action = new fromActions.HideConfirmationModal();
    expect({ ...action }).toEqual({
      type: fromActions.UIActionTypes.HideConfirmationModal,
    });
  });

  test('should set the router activity to true', () => {
    const action = new fromActions.SetRouterActivityOn();
    expect({ ...action }).toEqual({
      type: fromActions.UIActionTypes.SetRouterActivityOn,
    });
  });

  test('should set the router activity to false', () => {
    const action = new fromActions.SetRouterActivityOff();
    expect({ ...action }).toEqual({
      type: fromActions.UIActionTypes.SetRouterActivityOff,
    });
  });
});
