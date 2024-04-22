import type { ButtonProps } from '@blueshift-ui/button';

import { Button } from '@blueshift-ui/button';
import React from 'react';
import { scrollContentIntoView } from '../../helpers';

interface BackToTopButtonProps extends ButtonProps {
  onClick?: () => void;
  targetSelector?: string;
}

function BackToTopButton({
  children,
  onClick,
  targetSelector,
  variant = 'outlined',
  ...buttonProps
}: BackToTopButtonProps) {
  function handleClick() {
    onClick?.();

    if (targetSelector) {
      scrollContentIntoView(targetSelector);
      return;
    }

    window.scroll({ top: 0, behavior: 'smooth' });
  }

  return (
    <Button {...buttonProps} onClick={handleClick} variant={variant}>
      {children}
    </Button>
  );
}

export default BackToTopButton;
