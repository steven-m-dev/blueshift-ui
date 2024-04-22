import { novaAuroraTheme, vt1Theme } from '.';

describe('theme index', () => {
  describe('{novaAuroraTheme}', () => {
    it('is defined', () => {
      expect(novaAuroraTheme).toBeDefined();
    });
  });

  describe('{vt1Theme}', () => {
    it('is defined', () => {
      expect(vt1Theme).toBeDefined();
    });
  });
});
