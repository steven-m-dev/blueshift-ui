import Default, { ThemeProvider, novaAuroraTheme, useMediaQuery, useTheme, vt1Theme } from './';

describe('package index', () => {
  describe('<Default />', () => {
    it('is defined', () => {
      expect(Default).toBeDefined();
    });
  });

  describe('<ThemeProvider />', () => {
    it('is defined', () => {
      expect(ThemeProvider).toBeDefined();
    });
  });

  describe('{novaAuroraTheme}', () => {
    it('is defined', () => {
      expect(novaAuroraTheme).toBeDefined();
    });
  });

  describe('useMediaQuery()', () => {
    it('is defined', () => {
      expect(useMediaQuery).toBeDefined();
    });
  });

  describe('useTheme()', () => {
    it('is defined', () => {
      expect(useTheme).toBeDefined();
    });
  });

  describe('{vt1Theme}', () => {
    it('is defined', () => {
      expect(vt1Theme).toBeDefined();
    });
  });
});
