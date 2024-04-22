import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import React, { useMemo } from 'react';
import Button from './button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    blob: true;
    'blob-stacked': true;
  }
}

interface BlobButtonProps extends Omit<MuiButtonProps, 'variant' | 'startIcon'> {
  icon: React.ReactNode;
  orientation?: 'horizontal' | 'stacked';
}

function BlobButton({ icon, children, orientation = 'horizontal', ...props }: BlobButtonProps) {
  const blobRadius = useMemo(() => {
    // Generating randomized 2 numeric values between 30-70
    const percentages = Array(2)
      .fill(0)
      .map(() => 30 + Math.floor(Math.random() * 40));

    // Border Radius property to create a blob shape
    // Check more information on https://www.bram.us/2021/12/26/organic-blobs-in-css-with-border-radius/
    return `${percentages[0]}% ${100 - percentages[0]}% ${100 - percentages[0]}% ${
      percentages[0]
    }% / ${percentages[1]}% ${100 - percentages[1]}% ${percentages[1]}% ${100 - percentages[1]}%`;
  }, []);

  return (
    <Button
      {...props}
      startIcon={
        <div className="blob" style={{ borderRadius: blobRadius }}>
          {icon}
        </div>
      }
      variant={orientation === 'horizontal' ? 'blob' : 'blob-stacked'}
    >
      {children}
    </Button>
  );
}

export default BlobButton;
