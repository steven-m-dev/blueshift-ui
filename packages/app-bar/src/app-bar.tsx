import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import MuiAppBar from '@mui/material/AppBar';
import MuiSlide from '@mui/material/Slide';
import MuiToolbar from '@mui/material/Toolbar';
import React from 'react';
import defaultLogoUrl from '@blueshift-ui/theme/dist/brand/assets/logos/flat/monotone-light.svg?url';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface AppBarProps extends MuiAppBarProps {
  logoDescription?: string;
  logoUrl?: string;
}

function AppBar({
  children,
  logoDescription = 'Varsity Tutors',
  logoUrl = defaultLogoUrl,
  ...appBarProps
}: AppBarProps) {
  const scrollTrigger = useScrollTrigger();

  return (
    <MuiSlide appear={false} direction="down" in={!scrollTrigger}>
      <MuiAppBar {...appBarProps}>
        <MuiToolbar>
          {<img alt={logoDescription} src={logoUrl} />}
          {children}
        </MuiToolbar>
      </MuiAppBar>
    </MuiSlide>
  );
}

export default AppBar;
