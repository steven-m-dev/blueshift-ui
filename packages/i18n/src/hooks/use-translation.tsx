import type { TranslationResult, UseTranslationResult } from '../types';

import React from 'react';
import { useTranslation as useI18nextTranslation } from 'react-i18next';
import useTranslationNamespace from './use-translation-namespace';

function _getFallbackTranslation(key: string, options?: any): string {
  // If options is a string, it is considered the default value by i18next, so let's treat it as
  // the same here.
  return typeof options === 'string' ? options : key;
}

function useTranslation<TR extends TranslationResult>(
  name: string,
  flags?: string[]
): UseTranslationResult {
  const rich = Boolean(flags?.includes('rich'));
  const translationNameSpace = useTranslationNamespace(name, flags);
  const {
    i18n,
    ready,
    t: translate,
  } = useI18nextTranslation(translationNameSpace || '', { useSuspense: !rich });
  const translationLoading = Boolean(!ready || !translationNameSpace);

  return {
    i18n,
    loading: translationLoading,
    translate: React.useCallback(
      (key: string, options?: any): TR => {
        if (translationLoading) {
          // Our config relies on suspense
          return (rich ? null : _getFallbackTranslation(key, options)) as TR;
        }

        const translation = translate<string, any>(key, options);

        if (rich) {
          try {
            return JSON.parse(translation);
          } catch (error) {
            console.error(error);
            return null as TR;
          }
        }

        return translation as TR;
      },
      [rich, translate, translationLoading]
    ),
  };
}

export default useTranslation;
