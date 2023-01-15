import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, increseByValue } from "../app/features/counter/counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count : {count}</h2>
        <div style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch(increseByValue(10));
          }}
        >
          IncreseByValue
        </button>
      </div>
    </div>
  );
};

export default CounterView;
