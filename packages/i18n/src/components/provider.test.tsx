import I18nProvider from './provider';
import React from 'react';
import { render } from '@testing-library/react';

describe('<I18nProvider />', () => {
  it('renders', () => {
    render(<I18nProvider />);
  });
});
