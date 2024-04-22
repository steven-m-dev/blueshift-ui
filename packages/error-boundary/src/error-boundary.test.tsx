import ErrorBoundary from './error-boundary';
import React from 'react';
import { render } from '@testing-library/react';

function _ExplodingComponent() {
  throw new Error('💥');
  return <></>;
}

function _CustomErrorContent() {
  return <>Custom error content…</>;
}

describe('<ErrorBoundary />>', () => {
  beforeEach(() => {
    // Quite warning in jest output
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('when there is no error', () => {
    it('renders component tree normally', () => {
      const { getByText } = render(<ErrorBoundary>Some wrapped content…</ErrorBoundary>);
      expect(getByText(/Some wrapped content…/i)).toBeInTheDocument();
    });
  });

  describe('when there is an error', () => {
    describe('with default error content', () => {
      it('catches errors and shows default content', () => {
        const { getByText } = render(
          <ErrorBoundary>
            <_ExplodingComponent />
          </ErrorBoundary>
        );
        expect(getByText(/Oops!/i)).toBeInTheDocument();
      });
    });

    describe('with custom error content', () => {
      it('catches errors and shows custom content', () => {
        const { getByText } = render(
          <ErrorBoundary errorContent={<_CustomErrorContent />}>
            <_ExplodingComponent />
          </ErrorBoundary>
        );
        expect(getByText(/Custom error content…/i)).toBeInTheDocument();
      });
    });
  });
});
