import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import * as styles from './async-action-button.css';
import Button from './button';
import { CircularProgress } from '@blueshift-ui/progress-indicator';
import React from 'react';

const WAIT_DURATION = 3000;

interface AsyncActionButtonProps extends MuiButtonProps {
  action: () => Promise<void>;
  onResolved?: () => void;
  onRejected?: () => void;
}

enum AsyncActionButtonStatus {
  Idle,
  Pending,
  Resolved,
  Rejected,
}

function AsyncActionButton({
  action,
  children,
  disabled,
  onResolved,
  onRejected,
  size = 'medium',
  ...buttonProps
}: AsyncActionButtonProps) {
  const [status, setStatus] = React.useState<AsyncActionButtonStatus>(AsyncActionButtonStatus.Idle);

  function getCircularProgressSize() {
    switch (size) {
      case 'small':
        return 20;
      case 'large':
        return 28;
      default:
        return 24;
    }
  }

  function getClassName() {
    const classes = [styles.root];
    if (status === AsyncActionButtonStatus.Rejected) {
      classes.push(styles.rejected);
    }

    return classes.join(' ');
  }

  function getColor() {
    switch (status) {
      case AsyncActionButtonStatus.Resolved:
        return 'success';
      case AsyncActionButtonStatus.Rejected:
        return 'error';
    }
  }

  async function handleClick() {
    setStatus(AsyncActionButtonStatus.Pending);
    try {
      await action();
      setStatus(AsyncActionButtonStatus.Resolved);
      onResolved?.();
    } catch (error) {
      setStatus(AsyncActionButtonStatus.Rejected);
      onRejected?.();
    }

    setTimeout(() => {
      setStatus(AsyncActionButtonStatus.Idle);
    }, WAIT_DURATION);
  }

  return (
    <Button
      {...{ size, ...buttonProps }}
      className={getClassName()}
      color={getColor()}
      disabled={disabled || status === AsyncActionButtonStatus.Pending}
      onClick={handleClick}
    >
      {status === AsyncActionButtonStatus.Pending && (
        <CircularProgress className={styles.loadingIndicator} size={getCircularProgressSize()} />
      )}
      <span className={styles.buttonText}>{children}</span>
    </Button>
  );
}

export default AsyncActionButton;

export type { AsyncActionButtonProps };
