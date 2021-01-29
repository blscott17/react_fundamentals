// JS object where property values of the component are stored
// Managed inside of the component instead of being passed into it
// (like props).  NOTE props are READ ONLY     const count = useState(4)

import { useState } from 'react';
// [current value, fix to update current valute]
const State = () => {
  const [count, setCount] = useState(4); // useState Hook must execute in the same order

  function decCount() {
    setCount(count - 1);
  }

  function incCount() {
    setCount(count + 1);
  }

  return (
    <>
      {/* Fragments == empty div containers */}
      <button onClick={decCount}>-</button>
      <span>{count}</span>
      <button onClick={incCount}>+</button>
    </>
  );
};

export default State;
