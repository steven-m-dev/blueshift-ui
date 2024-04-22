import { ButtonProps } from '@mui/material';
import { novaAuroraTokens as tokens } from '@blueshift-ui/tokens';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    blob: true;
    'blob-stacked': true;
  }
}

const ButtonOverrides = {
  defaultProps: {
    variant: 'contained',
  } as ButtonProps,
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
  variants: [
    {
      props: { variant: 'blob' } as ButtonProps,
      style: ({ theme }: any) => ({
        minHeight: tokens.comp.button.blob.minHeight.default,
        textDecoration: 'underline',
        color: tokens.ref.palette.secondary[0],
        fontSize: tokens.comp.button.blob.fontSize.default,
        '.MuiButton-startIcon': {
          marginRight: tokens.comp.button.blob.margin.default,
          '.blob': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: tokens.comp.button.blob.blobSize.default,
            height: tokens.comp.button.blob.blobSize.default,
            fontSize: tokens.comp.button.blob.iconSize.default,
            backgroundColor: tokens.ref.palette.secondary[90],
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: theme.transitions.duration.standard,
              }
            ),
            svg: {
              width: tokens.comp.button.blob.iconSize.default,
              height: tokens.comp.button.blob.iconSize.default,
            },
          },
        },
        '&:active, &:focus, &:hover': {
          boxShadow: 'none',
          backgroundColor: 'transparent',
          textDecoration: 'underline',
        },
        '&:active .blob, &:focus .blob, &:hover .blob': {
          backgroundColor: tokens.ref.palette.secondary[0],
          color: 'white',
        },
      }),
    },
    {
      props: { variant: 'blob', size: 'small' } as ButtonProps,
      style: {
        minHeight: tokens.comp.button.blob.minHeight.horizontalSmall,
        '.MuiButton-startIcon .blob': {
          width: tokens.comp.button.blob.blobSize.small,
          height: tokens.comp.button.blob.blobSize.small,
          fontSize: tokens.comp.button.blob.iconSize.small,
          svg: {
            width: tokens.comp.button.blob.iconSize.small,
            height: tokens.comp.button.blob.iconSize.small,
          },
        },
      },
    },
    {
      props: { variant: 'blob-stacked' } as ButtonProps,
      style: ({ theme }: any) => ({
        flexDirection: 'column',
        minHeight: tokens.comp.button.blob.minHeight.stacked,
        textDecoration: 'underline',
        color: tokens.ref.palette.secondary[0],
        fontSize: tokens.comp.button.blob.fontSize.default,
        '.MuiButton-startIcon': {
          marginRight: '0',
          '.blob': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: tokens.comp.button.blob.blobSize.default,
            height: tokens.comp.button.blob.blobSize.default,
            fontSize: tokens.comp.button.blob.iconSize.default,
            backgroundColor: tokens.ref.palette.secondary[90],
            marginBottom: tokens.comp.button.blob.margin.default,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: theme.transitions.duration.standard,
              }
            ),
            svg: {
              width: tokens.comp.button.blob.iconSize.default,
              height: tokens.comp.button.blob.iconSize.default,
            },
          },
        },
        '&:active, &:focus, &:hover': {
          boxShadow: 'none',
          backgroundColor: 'transparent',
          textDecoration: 'underline',
        },
        '&:active .blob, &:focus .blob, &:hover .blob': {
          backgroundColor: tokens.ref.palette.secondary[0],
          color: 'white',
        },
      }),
    },
    {
      props: { variant: 'blob-stacked', size: 'small' } as ButtonProps,
      style: {
        minHeight: tokens.comp.button.blob.minHeight.stackedSmall,
        '.MuiButton-startIcon .blob': {
          width: tokens.comp.button.blob.blobSize.small,
          height: tokens.comp.button.blob.blobSize.small,
          fontSize: tokens.comp.button.blob.iconSize.small,
          svg: {
            width: tokens.comp.button.blob.iconSize.small,
            height: tokens.comp.button.blob.iconSize.small,
          },
        },
      },
    },
  ],
};

export default ButtonOverrides;
