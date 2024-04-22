import '@blueshift-ui/tokens/dist/vt-1/index.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

import { createTheme } from '@mui/material/styles';
import { vt1Tokens as tokens } from '@blueshift-ui/tokens';

const vt1Theme = createTheme({
  breakpoints: {
    values: {
      xs: tokens.sys.breakpoint.xs,
      sm: tokens.sys.breakpoint.sm,
      md: tokens.sys.breakpoint.md,
      lg: tokens.sys.breakpoint.lg,
      xl: tokens.sys.breakpoint.xl,
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.comp.appBar.backgroundColor.default,
          boxShadow: 'none',
          height: '4rem',
          '&.MuiPaper-root': {
            borderRadius: tokens.comp.appBar.borderRadius.default,
          },
          '& .MuiIconButton-root': {
            color: tokens.comp.appBar.children.iconButton.color.default,
          },
          '& img': {
            marginRight: '1rem',
            marginTop: '0.25rem',
            maxHeight: 'calc(100% - 1.75rem)',
            width: 'auto',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: tokens.comp.button.borderRadius.default,
          boxShadow: tokens.comp.button.boxShadow.default,
          height: tokens.comp.button.height.default,
          paddingLeft: tokens.comp.button.horizontalPadding.default,
          paddingRight: tokens.comp.button.horizontalPadding.default,
          textTransform: tokens.comp.button.textTransform.default as any,
          '&:active': {
            boxShadow: tokens.comp.button.boxShadow.active,
          },
          '&:focus': {
            boxShadow: tokens.comp.button.boxShadow.default,
          },
          '&:hover': {
            boxShadow: tokens.comp.button.boxShadow.hover,
          },
          sizeSmall: {
            height: tokens.comp.button.height.small,
            paddingLeft: tokens.comp.button.horizontalPadding.small,
            paddingRight: tokens.comp.button.horizontalPadding.small,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.sys.color.background.default,
          color: tokens.sys.color.text.primary,
        },
        ul: {
          marginLeft: '0',
          paddingLeft: '1rem',
        },
        'ul:first-child': {
          marginTop: '0',
        },
        'ul:last-child': {
          marginBottom: '0',
        },
        li: {
          paddingLeft: '0.5rem',
        },
        'li::marker': {
          content: '"•"',
        },
        'li > p:first-child': {
          marginTop: 0,
        },
        'li > p:last-child': {
          marginBottom: 0,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingBottom: '2rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          paddingTop: '1.5rem',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          alignItems: 'center',
          display: 'flex',
          borderBottom: 'solid 1px rgba(57, 57, 57, .20)',
          fontSize: tokens.sys.typescale.title.medium.size,
          fontWeight: tokens.sys.typescale.title.medium.weight,
          height: tokens.comp.dialog.title.height.default,
          letterSpacing: tokens.sys.typescale.title.medium.tracking,
          lineHeight: tokens.sys.typescale.title.medium.lineHeight,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          color: (tokens.comp.link.color as any)[
            ['primary', 'secondary', 'error'].includes(ownerState.color as string)
              ? (ownerState.color as string)
              : 'default'
          ],
          cursor: 'pointer',
          textDecorationColor: 'inherit',
        }),
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: tokens.comp.paper.borderRadius.default,
        },
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: '1.5rem',
        sx: {
          alignItems: 'center',
        },
      },
    },
  },
  palette: {
    action: {
      active: tokens.sys.color.action.active,
      disabled: tokens.sys.color.action.disabled,
      focus: tokens.sys.color.action.focus,
      hover: tokens.sys.color.action.hover,
      selected: tokens.sys.color.action.selected,
    },
    background: {
      default: tokens.sys.color.background.default,
      paper: tokens.sys.color.background.paper,
    },
    error: {
      main: tokens.sys.color.error.main,
      light: tokens.sys.color.error.light,
      dark: tokens.sys.color.error.dark,
      contrastText: tokens.sys.color.error.contrastText,
    },
    primary: {
      main: tokens.sys.color.primary.main,
      light: tokens.sys.color.primary.light,
      dark: tokens.sys.color.primary.dark,
      contrastText: tokens.sys.color.primary.contrastText,
    },
    secondary: {
      main: tokens.sys.color.secondary.main,
      light: tokens.sys.color.secondary.light,
      dark: tokens.sys.color.secondary.dark,
      contrastText: tokens.sys.color.secondary.contrastText,
    },
    success: {
      main: tokens.sys.color.success.main,
      light: tokens.sys.color.success.light,
      dark: tokens.sys.color.success.dark,
      contrastText: tokens.sys.color.success.contrastText,
    },
    text: {
      disabled: tokens.sys.color.text.disabled,
      primary: tokens.sys.color.text.primary,
      secondary: tokens.sys.color.text.secondary,
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: [tokens.ref.typeface.brand, tokens.ref.typeface.plain].join(','),
    h1: {
      fontSize: tokens.sys.typescale.display.large.size,
      fontWeight: tokens.sys.typescale.display.large.weight,
      letterSpacing: tokens.sys.typescale.display.large.tracking,
      lineHeight: tokens.sys.typescale.display.large.lineHeight,
    },
    h2: {
      fontSize: tokens.sys.typescale.display.medium.size,
      fontWeight: tokens.sys.typescale.display.medium.weight,
      letterSpacing: tokens.sys.typescale.display.medium.tracking,
      lineHeight: tokens.sys.typescale.display.medium.lineHeight,
    },
    h3: {
      fontSize: tokens.sys.typescale.display.small.size,
      fontWeight: tokens.sys.typescale.display.small.weight,
      letterSpacing: tokens.sys.typescale.display.small.tracking,
      lineHeight: tokens.sys.typescale.display.small.lineHeight,
    },
    h4: {
      fontSize: tokens.sys.typescale.headline.large.size,
      fontWeight: tokens.sys.typescale.headline.large.weight,
      letterSpacing: tokens.sys.typescale.headline.large.tracking,
      lineHeight: tokens.sys.typescale.headline.large.lineHeight,
    },
    h5: {
      fontSize: tokens.sys.typescale.headline.medium.size,
      fontWeight: tokens.sys.typescale.headline.medium.weight,
      letterSpacing: tokens.sys.typescale.headline.medium.tracking,
      lineHeight: tokens.sys.typescale.headline.medium.lineHeight,
    },
    h6: {
      fontSize: tokens.sys.typescale.headline.small.size,
      fontWeight: tokens.sys.typescale.headline.small.weight,
      letterSpacing: tokens.sys.typescale.headline.small.tracking,
      lineHeight: tokens.sys.typescale.headline.small.lineHeight,
    },
    body1: {
      fontSize: tokens.sys.typescale.body.medium.size,
      fontWeight: tokens.sys.typescale.body.medium.weight,
      letterSpacing: tokens.sys.typescale.body.medium.tracking,
      lineHeight: tokens.sys.typescale.body.medium.lineHeight,
    },
    body2: {
      fontSize: tokens.sys.typescale.body.small.size,
      fontWeight: tokens.sys.typescale.body.small.weight,
      letterSpacing: tokens.sys.typescale.body.small.tracking,
      lineHeight: tokens.sys.typescale.body.small.lineHeight,
    },
    button: {
      fontSize: tokens.sys.typescale.button.default.size,
      fontWeight: tokens.sys.typescale.button.default.weight,
      letterSpacing: tokens.sys.typescale.button.default.tracking,
      lineHeight: tokens.sys.typescale.button.default.lineHeight,
      textTransform: 'none',
    },
    caption: {
      fontSize: tokens.sys.typescale.caption.default.size,
      fontWeight: tokens.sys.typescale.caption.default.weight,
      letterSpacing: tokens.sys.typescale.caption.default.tracking,
      lineHeight: tokens.sys.typescale.caption.default.lineHeight,
    },
    overline: {
      fontSize: tokens.sys.typescale.overline.default.size,
      fontWeight: tokens.sys.typescale.overline.default.weight,
      letterSpacing: tokens.sys.typescale.overline.default.tracking,
      lineHeight: tokens.sys.typescale.overline.default.lineHeight,
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: tokens.sys.typescale.title.large.size,
      fontWeight: tokens.sys.typescale.title.large.weight,
      letterSpacing: tokens.sys.typescale.title.large.tracking,
      lineHeight: tokens.sys.typescale.title.large.lineHeight,
    },
    subtitle2: {
      fontSize: tokens.sys.typescale.title.medium.size,
      fontWeight: tokens.sys.typescale.title.medium.weight,
      letterSpacing: tokens.sys.typescale.title.medium.tracking,
      lineHeight: tokens.sys.typescale.title.medium.lineHeight,
    },
  },
});

export default vt1Theme;
