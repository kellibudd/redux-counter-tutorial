import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"
import Counter from "./Counter";
import "./index.css";
import { INCREMENT, DECREMENT, RESET } from './actions';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {

  console.log('Reducer: ', state, action);
  
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count -1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.dispatch({ type: INCREMENT});
store.dispatch({ type: DECREMENT});
store.dispatch({ type: RESET});

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
