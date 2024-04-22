import Default, { ErrorBoundary } from '.';

describe('package index', () => {
  describe('<Default />', () => {
    it('is defined', () => {
      expect(Default).toBeDefined();
    });
  });

  describe('<ErrorBoundary />', () => {
    it('is defined', () => {
      expect(ErrorBoundary).toBeDefined();
    });
  });
});
