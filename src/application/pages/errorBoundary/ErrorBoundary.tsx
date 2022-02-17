import React, { ErrorInfo } from 'react';

interface Props {}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error });
    console.log({ errorInfo });
    this.setState({ ...this.state, hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ color: 'red' }}>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
