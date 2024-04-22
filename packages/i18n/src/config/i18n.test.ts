import i18n from './i18n';
import mocked_requestTranslation from '../helpers/request-translation';

jest.mock('i18next', () => ({
  use: jest.fn(() => ({
    use: jest.fn(() => ({
      use: jest.fn(() => ({
        init: jest.fn(async (config) => {
          await config.backend.request(null, 'en/test', null, () => {});
        }),
      })),
    })),
  })),
}));

jest.mock('../helpers/request-translation');

describe('i18n', () => {
  it('is defined', () => {
    expect(i18n).toBeDefined();
  });

  it('calls `requestTranslation` on init', async () => {
    await setTimeout(() => {
      // This is a bit of a hack, but we need to wait for the i18n init to complete before we
      // can test the requestTranslation call, so we're using setTimeout to push the expects to the
      // end of the call stack.
      // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#zero_delays.
      expect(mocked_requestTranslation).toHaveBeenCalledTimes(1);
      expect(mocked_requestTranslation).toHaveBeenCalledWith('en/test', expect.any(Function));
    }, 0);
  });
});
