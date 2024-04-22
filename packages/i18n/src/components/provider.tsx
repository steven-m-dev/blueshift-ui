import * as atoms from '../state/atoms';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import i18n from '../config/i18n';
import { useSetAtom } from 'jotai/react';

interface I18nProviderProps extends React.PropsWithChildren<unknown> {
  /**
   * Optional translation scope, defaults to a global `vt` namespace.
   * @remark Namespace values need to align to the namespaces defined in rich_translation groupings in NSP.
   * @see https://nerdy.admin.datocms.com/admin/item_types/1450762
   */
  namespace?: string;
  /**
   * Optional preview flag, defaults to `false`. When true, the provider will fetch unpublished/draft translations.
   * @see https://nerdy.admin.datocms.com/admin/item_types/1450762
   */
  preview?: boolean;
}

function I18nProvider({ children, namespace = 'vt', preview = false }: I18nProviderProps) {
  const setNamespace = useSetAtom(atoms.namespace);
  const setPreview = useSetAtom(atoms.preview);

  React.useMemo(() => {
    setPreview(preview);
  }, [preview, setPreview]);

  React.useMemo(() => {
    setNamespace(namespace);
  }, [namespace, setNamespace]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default I18nProvider;
