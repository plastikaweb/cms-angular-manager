import { Observable } from 'rxjs';

export type ButtonsGroupLayout = 'column' | 'row';

export interface ButtonsGroupConfig {
  layout?: ButtonsGroupLayout | string;
  showLabel?: boolean;
  showIcon?: boolean;
  alwaysVisible?: boolean;
  pristineVisible?: boolean;
  extraClasses?: string;
}

export interface ButtonsGroupBuilder {
  getButtons(): Observable<ButtonsGroupConfig> | ButtonsGroupConfig;
}
