import { useState } from "react";
import "./Counter.css";

export const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);

  const handleCounter = (value) => {
    setCounter(counter + value);
  };

  const handleMulCounter = (value) => {
    setCounter(counter * value);
  };

  const condition = counter % 2 === 0;

  return (
    <div className="counter-div">
      <h1 className="count-h1" style={{ color: condition ? "green" : "red" }}>
        {counter}
      </h1>
      <button className="btn" onClick={() => handleCounter(1)}>
        Increment
      </button>
      <button className="btn" onClick={() => handleCounter(-1)}>
        Decrement
      </button>
      <button className="btn" onClick={() => handleMulCounter(2)}>
        Double
      </button>
    </div>
  );
};
