import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

const App = () => {
  const counter = useSelector((state) => state.changeNumber.counter);
  const payload = useSelector((state) => state);
  console.log("counter", counter);

  console.log("payload", payload);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Welcome To Increment / Decrement Counter</h1>
      <h3>By Using Redux</h3>
      <div className="quantity">
        <button
          type="button"
          className="minimum"
          title="Decrement"
          onClick={() => dispatch(decrement())}
        >
          <span> - </span>
        </button>
        <span>{counter}</span>
        <button
          type="button"
          className="maximum"
          title="Increment"
          onClick={() => dispatch(increment())}
        >
          <span> + </span>
        </button>
      </div>
    </div>
  );
};

export default App;
