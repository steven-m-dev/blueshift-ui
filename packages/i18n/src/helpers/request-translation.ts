import type { RequestTranslationCallback } from '../types';

type TranslationTypeConfig = {
  query: (slug: string, locale: string) => Record<string, any>;
  dataSelector: (results: any) => string;
};

const translationConfig: Record<string, TranslationTypeConfig> = {
  rich: {
    query(slug: string, locale: string) {
      return {
        cacheKey: `rich_translation_group/${slug}`,
        query: `
          query localizedContent($slug: String) {
            richTranslationGroup(filter: {slug: {eq: $slug}}) {
              id
              name
              namespace
              slug
              translations(fallbackLocales: en, locale: ${locale}) {
                id
                key
                value {
                  blocks
                  links { id actionName }
                  value
                }
              }
            }
          }
        `,
        slug,
      };
    },
    dataSelector(results: any) {
      return JSON.stringify(
        results?.[0]?.data.richTranslationGroup?.translations?.reduce(
          (
            translations: Record<string, any>,
            { key, value: translation }: Record<string, any>
          ) => ({
            ...translations,
            [key]: JSON.stringify(translation),
          }),
          {}
        ) || {}
      );
    },
  },
  plain: {
    query(slug: string, locale: string) {
      return {
        cacheKey: `translation_group/${slug}`,
        query: `
          query localizedCopy($slug: String) {
            translationGroup(filter: {slug: {eq: $slug}}) {
              name
              namespace
              slug
              translations(fallbackLocales: en, locale: ${locale})
            }
          }
        `,
        slug,
      };
    },
    dataSelector(results: any) {
      return JSON.stringify(results?.[0]?.data.translationGroup?.translations ?? {});
    },
  },
};

async function requestTranslation(path: string, callback: RequestTranslationCallback) {
  const [locale, options] = path.split('/');
  const [namespace, name, ...flags] = options.split('::');

  if (namespace === 'null') {
    callback(null, { status: 204, data: '' });
    return;
  }

  const isRich = flags.includes('rich');
  const { query, dataSelector } = translationConfig[isRich ? 'rich' : 'plain'];
  const slug = `${namespace}.${name}`;

  try {
    const response = await fetch(
      `${process.env.VITE_API_BASE_URL ?? 'https://api.vtstaging.com'}/v2/cms/content`,
      {
        method: 'POST',
        body: JSON.stringify({
          preview: flags.includes('preview'),
          queries: [query(slug, locale)],
        }),
      }
    );

    const json = await response.json();

    callback(null, { status: response.status, data: dataSelector(json.results) });
  } catch (error) {
    console.error(error);
    callback(error, { status: 500, data: '' });
  }
}

export default requestTranslation;
