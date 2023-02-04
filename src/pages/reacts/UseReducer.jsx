import React from "react";
import DifferenceReduxReducer from "./components/DifferenceReduxReducer";
// Init
const initState = 0;

// Action
const ACTION_UP = "up";
const ACTION_DOWN = "down";

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case ACTION_UP:
      return state + 1;
    case ACTION_DOWN:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function UseReducer() {
  const [count, dispatch] = React.useReducer(reducer, initState);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: "20vh" }}>
        <h1>useReducer</h1>
        <ol>
          <li>Init state</li>
          <li>Action</li>
          <li>Reducer</li>
          <li>Dispatch</li>
        </ol>
        <hr />
      </div>
      <div style={{ height: "50vh" }}>
        Count: {count}
        <br />
        <button onClick={() => dispatch(ACTION_DOWN)}>Down</button>
        <button onClick={() => dispatch(ACTION_UP)}>Up</button>
        <hr />
      </div>
      <div style={{ height: "30vh" }}>
        <DifferenceReduxReducer />
      </div>
    </div>
  );
}

export default UseReducer;
