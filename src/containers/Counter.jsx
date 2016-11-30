import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/CountActions';

class Counter extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    console.log('count' , this.props);
    const { actions: { incrementCount }, count } = this.props;
    return (
      <div>
        {count}
        <br />
        <button onClick={incrementCount}>Bump</button>
      </div>
    );
  }
}

Counter.propTypes = {
  actions: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
