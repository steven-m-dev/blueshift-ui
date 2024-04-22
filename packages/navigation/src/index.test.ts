import { BackToTopButton, scrollContentIntoView } from './';

describe('package index', () => {
  describe('<BackToTopButton />', () => {
    it('is defined', () => {
      expect(BackToTopButton).toBeDefined();
    });
  });

  describe('scrollContentIntoView', () => {
    it('is defined', () => {
      expect(scrollContentIntoView).toBeDefined();
    });
  });
});
