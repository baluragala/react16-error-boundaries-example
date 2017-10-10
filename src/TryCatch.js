import React, {Component} from 'react';

class TryCatch extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Sorry, an error has occurred, we logged a ticket automatically</h1>;
    }
    return this.props.children;
  }
}

export default TryCatch