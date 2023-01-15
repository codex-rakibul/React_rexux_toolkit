import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from ".././Services/Actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count : {count}</h3>
      <div style={{display:"flex",justifyContent:"center", gap:"1rem"}}>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
        <button onClick={() => dispatch(resetCounter())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
