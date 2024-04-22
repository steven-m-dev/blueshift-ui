import '@blueshift-ui/tokens/dist/nova-aurora/index.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import buttonOverrides from './overrides/button';
import { createTheme } from '@mui/material/styles';
import { novaAuroraTokens as tokens } from '@blueshift-ui/tokens';

const novaAuroraTheme = createTheme({
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          height: '4rem',
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
    MuiButton: buttonOverrides,
    MuiCard: {
      styleOverrides: {
        root: {
          minHeight: '21.5rem',
          width: '19.5rem',
          '> .MuiSkeleton-root': {
            height: '10rem',
          },
          '&.card-skeleton .MuiCardActions-root': {
            padding: 0,
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          flexDirection: 'column',
          padding: '.5rem 1.5rem 1.5rem 1.5rem',
          '> div': {
            display: 'flex',
            width: '100%',
          },
          '> div:last-of-type': {
            fontSize: tokens.sys.typescale.body.small.size,
            marginLeft: '0', // overwrite MuiCardActions-root>:not(:first-of-type) margin
          },
          '> div:first-of-type .MuiSkeleton-root': {
            marginBottom: '0.5rem',
            width: '70%',
          },
          '> div:last-of-type .MuiSkeleton-root': {
            width: '50%',
          },
          '& .MuiTypography-body2': {
            color: tokens.ref.palette.primary['20'],
            width: '100%',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0.75rem 1.5rem 0 1.5rem',
          '> .MuiSkeleton-root:first-child': {
            marginBottom: '0.5rem',
            width: '50%',
          },
          '> .MuiSkeleton-root:nth-child(2)': {
            fontSize: '2.2rem',
            marginBottom: '1.25rem',
          },
          '& .MuiTypography-h6': {
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '2',
            display: '-webkit-box',
            marginBottom: '1.25rem',
            overflow: 'hidden',
            width: '100%',
          },
          '& .MuiTypography-overline': {
            color: tokens.ref.palette.primary['20'],
            display: 'flex',
            marginBottom: '0.5rem',
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: '10rem',
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
        root: {
          cursor: 'pointer',
          textDecorationColor: 'inherit',
          '&:hover': {
            color: tokens.sys.color.primary.dark,
          },
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
  transitions: {
    duration: {
      short: 250,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
});

export default novaAuroraTheme;
