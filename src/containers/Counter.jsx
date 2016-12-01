import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/CountActions';

class Counter extends React.Component {
  render() {
    const { actions: { incrementCount }, count } = this.props;
    return (
      <div>
        You've pressed 'Bump' {count} time{count === 1 ? '' : 's'}
        <br />
        <button onClick={incrementCount}>Bump</button>
      </div>
    );
  }
}

Counter.propTypes = {
  actions: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
