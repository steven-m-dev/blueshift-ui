import type { RichContent, UseTranslationResult } from '../types';

import useTranslation from './use-translation';

function useRichTranslation(name: string): UseTranslationResult {
  return useTranslation<RichContent>(name, ['rich']);
}

export default useRichTranslation;
