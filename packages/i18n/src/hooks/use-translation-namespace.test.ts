import * as atoms from '../state/atoms';
import { act, renderHook } from '@testing-library/react';
import { useSetAtom } from 'jotai/react';
import useTranslationNamespace from './use-translation-namespace';

function _setValueOfAtomUnderTest(atom: any, value: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { result: setAtom } = renderHook(() => useSetAtom(atom));

  act(() => {
    setAtom.current(value);
  });
}

describe('useTranslationNamespace()', () => {
  describe('when namespace atom does not have a value', () => {
    beforeEach(() => {
      _setValueOfAtomUnderTest(atoms.namespace, null);
    });

    it('returns `false`', () => {
      const { result } = renderHook(() => useTranslationNamespace('mock_group_name'));
      expect(result.current).toEqual(false);
    });
  });

  describe('when namespace atom has a value', () => {
    beforeEach(() => {
      _setValueOfAtomUnderTest(atoms.namespace, 'mock_namespace');
    });

    it('returns correct translation namespace', () => {
      const { result } = renderHook(() => useTranslationNamespace('mock_group_name'));
      expect(result.current).toEqual('mock_namespace::mock_group_name');
    });

    describe('when `flags` are present', () => {
      it('returns correct translation namespace', () => {
        const { result } = renderHook(() =>
          useTranslationNamespace('mock_group_name', ['mock_flag_a', 'mock_flag_b'])
        );
        expect(result.current).toEqual('mock_namespace::mock_group_name::mock_flag_a::mock_flag_b');
      });

      describe('when preview atom is `true`', () => {
        beforeEach(() => {
          _setValueOfAtomUnderTest(atoms.preview, true);
        });

        it('includes `preview` in the namespace flags ', () => {
          const { result } = renderHook(() => useTranslationNamespace('mock_group_name'));
          expect(result.current).toEqual('mock_namespace::mock_group_name::preview');
        });

        describe('when preview present in local flags', () => {
          beforeEach(() => {
            _setValueOfAtomUnderTest(atoms.preview, true);
          });

          it('only includes `preview` flag once ', () => {
            const { result } = renderHook(() =>
              useTranslationNamespace('mock_group_name', ['preview'])
            );
            expect(result.current).toEqual('mock_namespace::mock_group_name::preview');
          });
        });
      });
    });
  });
});
