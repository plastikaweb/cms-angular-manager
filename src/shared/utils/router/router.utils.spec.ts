import { routerMocks } from './router.mocks';
import { RouterUtils } from './router.utils';

describe('RouterUtils', () => {
  describe('extractActivatedRouterData', () => {
    routerMocks.forEach(spec => {
      test(spec.description, () => {
        expect(RouterUtils.extractActivatedRouterData(spec.snapshot)).toEqual(
          spec.expect
        );
      });
    });
  });
});
