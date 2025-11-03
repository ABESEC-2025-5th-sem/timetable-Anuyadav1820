import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div id="counter" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <div className="countvalue" style={{ fontSize: "24px", marginTop: "20px" }}>
        <button onClick={decrement} style={{ padding: "10px 20px", marginRight: "10px" }}>
          -
        </button>
        <span>{count}</span>
        <button onClick={increment} style={{ padding: "10px 20px", marginLeft: "10px" }}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;


