import React, { useState } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function Counter(props) {
  // const [count, setCount] = useState(0);

  const increment = () => {
    /* TO DO */
  };

  const decrement = () => {
    /* TO DO */
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{props.count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Counter);
