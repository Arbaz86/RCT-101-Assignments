import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1 className="counter-heading">COUNTER</h1>
      <Counter initialValue={0} />
    </div>
  );
}

export default App;
