import React from 'react';

import { connect } from 'react-redux';
import { Add, Del, Reset } from './action';
class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Class Componnent</h1>
        {this.props.data}
        <button onClick={this.props.Add}>+</button>
        <button onClick={this.props.del}>-</button>
        <button onClick={this.props.Reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Add: () => dispatch(Add()),
    del: () => dispatch(Del()),
    Reset: () => dispatch(Reset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
