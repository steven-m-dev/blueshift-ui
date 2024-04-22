import { renderHook } from '@testing-library/react';
import useTranslation from './use-translation';

import { useTranslation as mocked_useI18nextTranslation } from 'react-i18next';
import mocked_useTranslationNamespace from './use-translation-namespace';

jest.mock('react-i18next');
jest.mock('./use-translation-namespace');

describe('useTranslation()', () => {
  beforeEach(() => {
    (mocked_useI18nextTranslation as jest.Mock).mockReturnValue({
      i18n: { isInitialized: true } as any,
      ready: true,
      t: (key: string) => `mock_translation_string_for:${key}`,
    });
    (mocked_useTranslationNamespace as jest.Mock).mockReturnValue('mock_namespace');
  });

  it('returns the correct result', () => {
    const { result } = renderHook(() => useTranslation('mock_group_name'));
    expect(result.current).toEqual({
      i18n: expect.any(Object),
      loading: false,
      translate: expect.any(Function),
    });
  });

  describe('.translate()', () => {
    describe('when translation namespace is not available', () => {
      beforeEach(() => {
        (mocked_useTranslationNamespace as jest.Mock).mockReturnValue(false);
      });

      it('returns the key as a fallback', () => {
        const { result } = renderHook(() => useTranslation('mock_group_name'));
        expect(result.current.translate('mock_translation_key')).toBe('mock_translation_key');
      });
    });

    describe('when translation namespace is available', () => {
      beforeEach(() => {
        (mocked_useTranslationNamespace as jest.Mock).mockReturnValue('mock_namespace');
      });

      it('returns the translation', () => {
        const { result } = renderHook(() => useTranslation('mock_group_name'));
        expect(result.current.translate('mock_translation_key')).toBe(
          'mock_translation_string_for:mock_translation_key'
        );
      });
    });
  });
});
