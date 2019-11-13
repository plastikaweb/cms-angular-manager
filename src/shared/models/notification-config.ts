import { IndividualConfig } from 'ngx-toastr';

export enum NotificationTypes {
  error = 'ERROR',
  info = 'INFO',
  success = 'SUCCESS',
  warning = 'WARNING',
}
export interface NotificationConfig {
  title?: string;
  message: string;
  type: NotificationTypes;
  config?: Partial<IndividualConfig>;
}
