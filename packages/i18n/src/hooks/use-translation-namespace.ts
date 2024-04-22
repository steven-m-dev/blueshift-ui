import * as atoms from '../state/atoms';
import { useAtomValue } from 'jotai/react';

function useTranslationNamespace(name: string, flags: string[] = []): string | false {
  const namespace = useAtomValue(atoms.namespace);
  const preview = useAtomValue(atoms.preview);

  if (!namespace) {
    // If `namespace` is null (falsy), the i18next isn't initialed fully yet.
    return false;
  }

  if (preview && !flags.includes('preview')) {
    flags.push('preview');
  }

  return `${namespace}::${name}${flags.length ? `::${flags.join('::')}` : ''}`;
}

export default useTranslationNamespace;
