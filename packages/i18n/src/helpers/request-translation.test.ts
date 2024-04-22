import fetchMock from 'fetch-mock-jest';
import requestTranslation from './request-translation';

describe('requestTranslation()', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('when translation group namespace is `null`', () => {
    it('provides expected response data', async () => {
      await requestTranslation('en/null', (error, response) => {
        expect(error).toBe(null);
        expect(response.status).toBe(204);
        expect(response.data).toBe('');
      });
    });

    it('does not call `fetch`', async () => {
      await requestTranslation('en/null', () => {});
      expect(fetchMock).not.toHaveBeenCalled();
    });
  });

  describe('when translation group namespace does not include `rich` flag', () => {
    const mockResponse = {
      results: [
        {
          data: {
            translationGroup: {
              name: 'plain_group',
              namespace: 'test',
              slug: 'test.plain_group',
              translations: {
                test_key: 'Test Value',
              },
            },
          },
        },
      ],
    };

    beforeEach(() => {
      fetchMock.once(
        'https://api.vtstaging.com/v2/cms/content',
        { status: 200, body: mockResponse },
        { overwriteRoutes: true }
      );
    });

    it('calls `fetch` correctly', async () => {
      await requestTranslation('en/test::plain_group', () => {});
      expect(fetchMock).toHaveFetchedTimes(1);
      expect(fetchMock).toHaveFetched(
        'https://api.vtstaging.com/v2/cms/content',
        expect.objectContaining({
          body: JSON.stringify({
            query: `
              query localizedCopy($slug: String) {
                translationGroup(filter: {slug: {eq: $slug}}) {
                  name
                  namespace
                  slug
                  translations(fallbackLocales: en, locale: en)
                }
              }
            `,
            slug: 'test.plain_group',
          }),
        })
      );
    });

    it('provides expected response data', async () => {
      await requestTranslation('en/test::plain_group', (error, response) => {
        expect(error).toBe(null);
        expect(response.status).toBe(200);
        expect(response.data).toBe(
          JSON.stringify(mockResponse.results[0].data.translationGroup.translations)
        );
      });
    });
  });

  describe('when translation group namespace includes `rich` flag', () => {
    const mockResponse = {
      results: [
        {
          data: {
            richTranslationGroup: {
              name: 'rich_group',
              namespace: 'test',
              slug: 'test.rich_group',
              translations: [
                {
                  key: 'test_key',
                  value: {
                    schema: 'dast',
                    document: {
                      type: 'root',
                      children: [
                        {
                          type: 'heading',
                          level: 1,
                          children: [
                            { type: 'span', value: 'This\nis a ' },
                            { type: 'span', marks: ['strong'], value: 'mock' },
                          ],
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    };

    beforeEach(() => {
      fetchMock.once(
        'https://api.vtstaging.com/v2/cms/content',
        { status: 200, body: mockResponse },
        { overwriteRoutes: true }
      );
    });

    beforeEach(() => {
      fetchMock.mockClear();
    });

    it('calls `fetch` correctly', async () => {
      await requestTranslation('en/test::rich_group::rich', () => {});
      expect(fetchMock).toHaveFetchedTimes(1);
      expect(fetchMock).toHaveFetched(
        'https://api.vtstaging.com/v2/cms/content',
        expect.objectContaining({
          body: JSON.stringify({
            query: `
              query localizedContent($slug: String) {
                richTranslationGroup(filter: {slug: {eq: $slug}}) {
                  id
                  name
                  namespace
                  slug
                  translations(fallbackLocales: en, locale: en) {
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
            slug: 'test.rich_group',
          }),
        })
      );
    });

    it('provides expected response data', async () => {
      await requestTranslation('en/test::rich_group::rich', (error, response) => {
        expect(error).toBe(null);
        expect(response.status).toBe(200);
        expect(response.data).toBe(
          JSON.stringify({
            test_key: JSON.stringify(
              mockResponse.results[0].data.richTranslationGroup.translations[0].value
            ),
          })
        );
      });
    });
  });

  describe('when `fetch` fails', () => {
    beforeEach(() => {
      fetchMock.once(
        'https://api.vtstaging.com/v2/cms/content',
        { status: 500, body: '' },
        { overwriteRoutes: true }
      );
    });

    it('provides expected response data', async () => {
      await requestTranslation('en/test::plain_group', (error, response) => {
        expect(error).toBeInstanceOf(Error);
        expect(response.status).toBe(500);
        expect(response.data).toBe('');
      });
    });
  });
});
