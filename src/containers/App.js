import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchAggregationsIfNeeded } from '../actions';
import './App.scss';

class App extends Component {
  componentDidMount() {
    const { handleDidMount } = this.props;
    handleDidMount();
  }
  render() {
    const { children } = this.props;
    return (
      <div className="explorer-container">
        <div className="explorer">
          {children}
        </div>
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired,
  handleDidMount: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    handleDidMount: () => {
      dispatch(fetchAggregationsIfNeeded());
    },
  };
}

export default connect(undefined, mapDispatchToProps)(App);