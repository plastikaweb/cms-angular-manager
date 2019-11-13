export interface ConfirmationModalConfig {
  visible: boolean;
  title: string;
  body?: string;
  data?: object;
  action?(id?: string | number): void;
}
