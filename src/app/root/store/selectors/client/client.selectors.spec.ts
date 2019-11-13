import * as fromSelectors from '@app/root/store/selectors';
import { clientMockState } from '@shared/mocks';

describe('Client selectors', () => {
  test('should return Title', () => {
    expect(fromSelectors.getClientTitle.projector(clientMockState)).toBe(
      clientMockState.title
    );
  });

  test('should return Slug', () => {
    expect(fromSelectors.getClientSlug.projector(clientMockState)).toBe(
      clientMockState.slug
    );
  });

  test('should return Theme', () => {
    expect(fromSelectors.getClientTheme.projector(clientMockState)).toBe(
      clientMockState.theme
    );
  });

  test('should return Image Route', () => {
    expect(fromSelectors.getClientImageRoute.projector(clientMockState)).toBe(
      clientMockState.imageRoute
    );
  });
});
