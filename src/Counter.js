import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from './actions';

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function Counter(props) {

  const increment = () => {
    props.increment();
  };

  const decrement = () => {
    props.decrement();
  };

  const reset = () => {
    props.reset();
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{props.count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset}>reset</button>
    </div>
  );
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

console.log(mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
