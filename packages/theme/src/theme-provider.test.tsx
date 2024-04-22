import React from 'react';
import ThemeProvider from './theme-provider';
import { render } from '@testing-library/react';

describe('<ThemeProvider />', () => {
  it('renders', () => {
    render(<ThemeProvider />);
  });
});
