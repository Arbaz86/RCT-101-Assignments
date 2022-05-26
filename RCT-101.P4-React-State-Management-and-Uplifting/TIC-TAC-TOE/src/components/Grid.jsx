import React from "react";
import { Square } from "./Square";

export const Grid = ({ handleClick, cells, winner, handleRestart }) => {
  return (
    <div>
      <Square handleClick={handleClick} cells={cells} />
      {winner && (
        <>
          <h3>{winner} is the Winner!</h3>
          <button onClick={handleRestart}>Play Again</button>
        </>
      )}
    </div>
  );
};
