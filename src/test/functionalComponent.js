import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Add, Del, Reset } from './action';
export default function App() {
  const data = useSelector((state) => state);
  console.log(data);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Functional Componnent</h1>
      {data}
      <button onClick={() => dispatch(Add())}>+</button>
      <button onClick={() => dispatch(Del())}>-</button>
      <button onClick={() => dispatch(Reset())}>reset</button>
    </div>
  );
}
