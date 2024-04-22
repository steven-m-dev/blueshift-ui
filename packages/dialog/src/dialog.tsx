import type { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

import * as styles from './dialog.css';
import { Close } from '@blueshift-ui/icon';
import { IconButton } from '@blueshift-ui/button';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';
import React from 'react';

export interface DialogProps extends Omit<MuiDialogProps, 'title'> {
  title: React.ReactNode;
  actions?: React.ReactNode | React.ReactNode[];
  onClose?: () => void;
  withCloseButton?: boolean;
}

function Dialog({
  title,
  children,
  actions,
  onClose,
  withCloseButton,
  ...dialogProps
}: DialogProps) {
  return (
    <MuiDialog {...{ ...dialogProps, onClose }}>
      <MuiDialogTitle className={withCloseButton ? styles.titleWithCloseButton : undefined}>
        {withCloseButton ? (
          <>
            <span className={styles.titleContainer}>{title}</span>

            <IconButton aria-label="close" onClick={onClose}>
              <Close />
            </IconButton>
          </>
        ) : (
          title
        )}
      </MuiDialogTitle>

      <MuiDialogContent>{children}</MuiDialogContent>

      {actions && <MuiDialogActions>{actions}</MuiDialogActions>}
    </MuiDialog>
  );
}

export default Dialog;
