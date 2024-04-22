import { Box } from '@blueshift-ui/box';
import React from 'react';
import { Typography } from '@blueshift-ui/typography';

function _DefaultErrorContent() {
  return (
    <Box margin={4} textAlign="center">
      <Typography variant="h5">Oops! We encountered an unexpected error.</Typography>
      <Typography mt={2} variant="body1">
        Please reload the page, and try again
      </Typography>
    </Box>
  );
}

interface ErrorBoundaryProps extends React.PropsWithChildren {
  errorContent?: React.ReactElement;
  logger?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// See: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static defaultProps = {
    logger: console.error,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.logger?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorContent ?? <_DefaultErrorContent />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
