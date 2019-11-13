import { browser, by, element } from 'protractor';

const clientList = {
  baviera: {
    title: 'Clínica Baviera / Marco Polo',
    slug: 'baviera',
    theme: 'dark-blue',
    imageRoute: '/images/clinicabaviera_logo.png',
  },
};

export class AppPage {
  navigateTo() {
    return browser.get(
      `${browser.baseUrl}/${this.getClientListData().slug}`
    ) as Promise<any>;
  }

  getH1Title() {
    return element(by.css('app-root h1 img')).getAttribute('alt') as Promise<
      string
    >;
  }

  getClientListData() {
    return clientList.baviera;
  }
}
