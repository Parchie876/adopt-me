// * See documentation @ reactjs.org/docs/error-boundaries.html

import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';
import { Alert, AlertTitle } from '@material-ui/lab';
import Loader from './Loader'

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow/>;
    }
    if (this.state.hasError) {
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          There was an error with this loading. —{' '}
          <strong>
            <Link to="/">Click here</Link> to go back to home or wait five
            seconds <Loader />
          </strong>
        </Alert>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
