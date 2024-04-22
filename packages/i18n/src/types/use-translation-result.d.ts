import type { TranslationFunction } from './translation-function';
import type { i18n } from 'i18next';

interface UseTranslationResult {
  i18n: i18n;
  loading: boolean;
  translate: TranslationFunction;
}

export type { UseTranslationResult };
