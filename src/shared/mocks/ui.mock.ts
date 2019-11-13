import { initialState, UiState } from '@app/root/store/reducers/ui/ui.reducer';
import { NotificationTypes } from '@shared/models';

export const uiMockState: UiState = {
  ...initialState,
  sidebarVisibility: !initialState.sidebarVisibility,
  progressbarVisibility: true,
  notification: {
    title: 'notification title',
    message: 'Error 500',
    type: NotificationTypes.error,
  },
  confirmationModal: {
    visible: true,
    data: { id: 1, name: 'aaa' },
    title: 'the title',
    body: 'the body',
    action: () => {},
  },
  routerActivity: true,
};
