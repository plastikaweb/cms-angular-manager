import { Culture } from '@shared/models';

import { of } from 'rxjs';

export class BaseSandboxMock {
  pageConfig$ = of({
    text: null,
    buttons: null,
    tree: null,
    filter: null,
    fields: null,
  });
  cultures: { [code: string]: Culture } = {
    es: {
      code: 'es',
      icon: '',
      name: 'es',
    },
  };
}
