import { act, render } from '@testing-library/react';
import BackToTopButton from './index';
import React from 'react';
import { scrollContentIntoView } from '../../helpers';

jest.mock('../../helpers');

describe('<BackToTopButton />', () => {
  it('renders', () => {
    render(<BackToTopButton />);
  });

  describe('interaction', () => {
    describe('when button clicked', () => {
      beforeAll(() => {
        window.scroll = jest.fn();
      });

      describe('when targetSelector prop is provided', () => {
        it('scrolls to top of target element', () => {
          const { getByRole } = render(<BackToTopButton targetSelector="#top" />);
          const button = getByRole('button');

          act(() => {
            button.click();
          });

          expect(scrollContentIntoView).toBeCalledWith('#top');
        });
      });

      describe('when targetSelector prop not is provided', () => {
        it('scrolls to top of page', () => {
          const { getByRole } = render(<BackToTopButton />);
          const button = getByRole('button');

          act(() => {
            button.click();
          });

          expect(window.scroll).toBeCalledWith({ top: 0, behavior: 'smooth' });
        });
      });

      describe('when onClick prop is provided', () => {
        it('calls onClick prop', () => {
          const onClick = jest.fn();
          const { getByRole } = render(<BackToTopButton onClick={onClick} />);
          const button = getByRole('button');

          act(() => {
            button.click();
          });

          expect(onClick).toBeCalled();
        });
      });
    });
  });
});
