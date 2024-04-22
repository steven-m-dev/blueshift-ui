import { act, fireEvent, render } from '@testing-library/react';
import AsyncActionButton from './async-action-button';
import React from 'react';

describe('<AsyncActionButton />', () => {
  const action = jest.fn().mockResolvedValue(undefined);

  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('renders', () => {
    render(<AsyncActionButton action={action}>Test</AsyncActionButton>);
  });

  describe('before button is clicked', () => {
    it('should render the button with initial state', () => {
      const { getByText } = render(<AsyncActionButton action={action}>Test</AsyncActionButton>);
      expect(getByText(/test/i)).not.toBeDisabled();
    });
  });

  describe('when button is clicked', () => {
    it('shows CircularProgress and disables the button', async () => {
      let clickPromise;

      const { container, getByTestId } = render(
        <AsyncActionButton action={action} id="test-action-button">
          Test
        </AsyncActionButton>
      );
      const button = getByTestId('test-action-button');

      act(() => {
        clickPromise = fireEvent.click(button);
      });

      const circularProgress = container.querySelector('svg');
      expect(button).toBeDisabled();
      expect(button).toContainElement(circularProgress);

      await act(async () => {
        await clickPromise;
        jest.runAllTimers();
      });
    });

    it('shows small CircularProgress indicator', async () => {
      let clickPromise;

      const { container, getByText } = render(
        <AsyncActionButton action={action} size="small">
          Test
        </AsyncActionButton>
      );
      const button = getByText(/test/i);

      act(() => {
        clickPromise = fireEvent.click(button);
      });

      const circularProgress = container.querySelector('span');
      expect(circularProgress).toHaveAttribute('style', 'width: 20px; height: 20px;');

      await act(async () => {
        await clickPromise;
        jest.runAllTimers();
      });
    });

    it('shows large CircularProgress indicator', async () => {
      let clickPromise;

      const { container, getByText } = render(
        <AsyncActionButton action={action} size="large">
          Test
        </AsyncActionButton>
      );
      const button = getByText(/test/i);

      act(() => {
        clickPromise = fireEvent.click(button);
      });

      const circularProgress = container.querySelector('span');
      expect(circularProgress).toHaveAttribute('style', 'width: 28px; height: 28px;');

      await act(async () => {
        await clickPromise;
        jest.runAllTimers();
      });
    });

    describe('when action resolves', () => {
      it('calls onResolved', async () => {
        const onResolved = jest.fn();
        const { getByText } = render(
          <AsyncActionButton action={action} onResolved={onResolved}>
            Test
          </AsyncActionButton>
        );
        const button = getByText(/test/i);
        let clickPromise;

        await act(async () => {
          clickPromise = await fireEvent.click(button);
        });

        expect(onResolved).toHaveBeenCalled();

        await act(async () => {
          await clickPromise;
          jest.runAllTimers();
        });
      });
    });

    describe('when action rejects', () => {
      it('calls onRejected', async () => {
        const onRejected = jest.fn();
        const { getByText } = render(
          <AsyncActionButton action={() => Promise.reject()} onRejected={onRejected}>
            Test
          </AsyncActionButton>
        );
        const button = getByText(/test/i);
        let clickPromise;

        await act(async () => {
          clickPromise = await fireEvent.click(button);
        });

        expect(onRejected).toHaveBeenCalled();

        await act(async () => {
          await clickPromise;
          jest.runAllTimers();
        });
      });
    });

    describe('after 3 seconds', () => {
      it('sets the button to idle state', async () => {
        const { getByText } = render(<AsyncActionButton action={action}>Test</AsyncActionButton>);
        const button = getByText(/test/i);
        let clickPromise;

        await act(async () => {
          clickPromise = await fireEvent.click(button);
        });

        expect(button).not.toBeDisabled();

        await act(async () => {
          await clickPromise;
          jest.runAllTimers();
        });
      });
    });
  });
});
