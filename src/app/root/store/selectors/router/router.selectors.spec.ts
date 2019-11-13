import * as fromSelectors from '@app/root/store/selectors';
import { routerMockState } from '@shared/mocks';

describe('Router selectors', () => {
  test('should return Url', () => {
    expect(fromSelectors.getRouterUrl.projector(routerMockState)).toBe(
      routerMockState.state.url
    );
  });

  test('should return Params', () => {
    expect(fromSelectors.getRouterParams.projector(routerMockState)).toBe(
      routerMockState.state.params
    );
  });

  test('should return Paths', () => {
    expect(fromSelectors.getRouterPaths.projector(routerMockState)).toBe(
      routerMockState.state.paths
    );
  });

  test('should return Data Title', () => {
    expect(fromSelectors.getRouterDataTitle.projector(routerMockState)).toBe(
      routerMockState.state.title
    );
  });

  test('should return Current Page', () => {
    expect(fromSelectors.getRouterCurrentPage.projector(routerMockState)).toBe(
      routerMockState.state.currentPage
    );
  });
});
