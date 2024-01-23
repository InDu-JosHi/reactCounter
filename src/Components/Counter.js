import "./counter.css";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount((count) => count + 1);
    console.log(count);
  }
  function decrease() {
    setCount((count) => count - 1);
    console.log(count);
  }
  function reset() {
    setCount((count) => 0);
  }
  return (
    <>
      <div className="container">
        <div className="counter">
          <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <div className="buttons">
              <button onClick={increase} className="increaseBtn">
                Increase
              </button>
              <button onClick={reset} className="resetBtn">
                Reset
              </button>
              <button onClick={decrease} className="decreaseBtn">
                Decrease
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Counter;
