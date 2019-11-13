import { PageConfig } from '@shared/models';

export class HomeConfig implements PageConfig {
  private getText() {
    return {
      header: '<i class="zmdi zmdi-home"></i> Inicio',
      title: 'Bienvenvido',
    };
  }

  getConfig() {
    return {
      text: this.getText(),
    };
  }
}
