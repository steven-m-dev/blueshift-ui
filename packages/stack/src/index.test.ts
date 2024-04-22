import Default, { Stack } from './';

describe('package index', () => {
  describe('<Default />', () => {
    it('is defined', () => {
      expect(Default).toBeDefined();
    });
  });

  describe('<Stack />', () => {
    it('is defined', () => {
      expect(Stack).toBeDefined();
    });
  });
});
