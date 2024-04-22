import type { Theme as MuiTheme } from '@mui/material';

import MuiCssBaseline from '@mui/material/CssBaseline';
import MuiStyledEngineProvider from '@mui/material/StyledEngineProvider';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import defaultTheme from './themes/nova-aurora';

interface ThemeProviderProps extends React.PropsWithChildren<unknown> {
  /**
   * Optional MUI theme object, defaults to Nova Aurora theme
   * @see https://mui.com/customization/theming/
   */
  theme?: MuiTheme;
}

function ThemeProvider({ children, theme = defaultTheme }: ThemeProviderProps) {
  return (
    <MuiStyledEngineProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <MuiCssBaseline />
        {children}
      </MuiThemeProvider>
    </MuiStyledEngineProvider>
  );
}

export default ThemeProvider;
