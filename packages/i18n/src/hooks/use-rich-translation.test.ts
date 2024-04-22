import type { UseTranslationResult } from '../types';

import mocked_useTranslation from './use-translation';
import { renderHook } from '@testing-library/react';
import useRichTranslation from './use-rich-translation';

jest.mock('./use-translation');

describe('useRichTranslation()', () => {
  let result: { current: UseTranslationResult };

  beforeEach(() => {
    result = renderHook(() => useRichTranslation('mock_group_name')).result;
  });

  it('calls `useTranslation` correctly', () => {
    expect(mocked_useTranslation).toHaveBeenCalledWith('mock_group_name', ['rich']);
  });

  it(`returns the result of calling 'useTranslation'`, () => {
    expect(result.current).toEqual((mocked_useTranslation as jest.Mock).mock.results[0].value);
  });
});
