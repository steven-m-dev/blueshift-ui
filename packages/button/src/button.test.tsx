import Button from './button';
import React from 'react';
import { render } from '@testing-library/react';

describe('<Button />', () => {
  it('renders', () => {
    render(<Button />);
  });
});
