import { CircularProgress } from '.';
import { LinearProgress } from '.';

describe('package index', () => {
  describe('<CircularProgress />', () => {
    it('is defined', () => {
      expect(CircularProgress).toBeDefined();
    });
  });

  describe('<LinearProgress />', () => {
    it('is defined', () => {
      expect(LinearProgress).toBeDefined();
    });
  });
});
