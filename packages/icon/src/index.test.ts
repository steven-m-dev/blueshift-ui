import { AccessAlarm, Icon } from './';

jest.mock('@mui/icons-material', () => ({
  AccessAlarm: 'AccessAlarm',
}));

describe('package index', () => {
  describe('<Icon />', () => {
    it('is defined', () => {
      expect(Icon).toBeDefined();
    });
  });

  // confirm `icons-material` package is exported
  describe('<AccessAlarm />', () => {
    it('is defined', () => {
      expect(AccessAlarm).toBeDefined();
    });
  });
});
