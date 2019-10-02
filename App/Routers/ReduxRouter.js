import React, { Component } from 'react';
import { Router, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';

class RouterWithRedux extends Component {
  reducerCreate = (params) => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
      this.props.dispatch(action);
      return defaultReducer(state, action);
    };
  };

  render() {
    return <Router createReducer={this.reducerCreate} {...this.props} />;
  }
}

export default connect()(RouterWithRedux);
