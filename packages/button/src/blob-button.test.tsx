import BlobButton from './blob-button';
import React from 'react';
import { render } from '@testing-library/react';

describe('<BlobButton />', () => {
  it('renders horizontal variant correctly', () => {
    const { container, getByText } = render(<BlobButton icon={<svg>Icon</svg>}>Test</BlobButton>);

    expect(getByText('Icon')).toBeVisible();
    expect(getByText('Test')).toBeVisible();

    expect(container.firstChild).toHaveClass('MuiButton-blob MuiButton-blobSizeMedium');
  });

  it('renders stacked variant correctly', () => {
    const { container, getByText } = render(
      <BlobButton icon={<svg>Icon</svg>} orientation="stacked">
        Test
      </BlobButton>
    );

    expect(getByText('Icon')).toBeVisible();
    expect(getByText('Test')).toBeVisible();
    expect(container.firstChild).toHaveClass(
      'MuiButton-blob-stacked MuiButton-blob-stackedSizeMedium'
    );
  });

  it('renders small sized button correctly', () => {
    const { container, getByText } = render(
      <BlobButton icon={<svg>Icon</svg>} size="small">
        Test
      </BlobButton>
    );

    expect(getByText('Icon')).toBeVisible();
    expect(getByText('Test')).toBeVisible();
    expect(container.firstChild).toHaveClass('MuiButton-blob MuiButton-blobSizeSmall');
  });

  it('renders small stacked button correctly', () => {
    const { container, getByText } = render(
      <BlobButton icon={<svg>Icon</svg>} orientation="stacked" size="small">
        Test
      </BlobButton>
    );

    expect(getByText('Icon')).toBeVisible();
    expect(getByText('Test')).toBeVisible();
    expect(container.firstChild).toHaveClass(
      'MuiButton-blob-stacked MuiButton-blob-stackedSizeSmall'
    );
  });
});
