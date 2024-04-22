import RadioButtonGroup from './radio-button-group';
import React from 'react';
import { render } from '@testing-library/react';

describe('<RadioButtonGroup />', () => {
  const inputOptions = [
    {
      label: 'Dogs',
      value: 'dogs',
    },
    {
      label: 'Cats',
      value: 'cats',
    },
    {
      label: 'Birds',
      value: 'birds',
    },
  ];

  describe('when a label is provided', () => {
    it('renders a label', () => {
      const { getByLabelText } = render(
        <RadioButtonGroup inputOptions={inputOptions} label="foo" />
      );
      expect(getByLabelText('foo')).toBeInTheDocument();
    });
  });

  describe('when no label is provided', () => {
    it('does not render a label', () => {
      const { queryByLabelText } = render(<RadioButtonGroup inputOptions={inputOptions} />);
      expect(queryByLabelText('foo')).toBeNull();
    });
  });

  describe('when a control input option is provided', () => {
    it('renders the control input option', () => {
      const { getByRole } = render(
        <RadioButtonGroup
          inputOptions={[
            {
              control: <input type="checkbox" />,
              label: 'Dogs',
              value: 'dogs',
            },
            {
              label: 'Cats',
              value: 'cats',
            },
            {
              label: 'Birds',
              value: 'birds',
            },
          ]}
        />
      );
      expect(getByRole('checkbox')).toBeInTheDocument();
    });
  });
});
