import React, { useState } from "react";
import { Grid } from "./Grid";

export const Game = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState();

  const calculateWinner = (square) => {
    const combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          square[pattern[0]] === null ||
          square[pattern[1]] === null ||
          square[pattern[2]] === null
        ) {
          // do nothing here
        } else if (
          square[pattern[0]] === square[pattern[1]] &&
          square[pattern[1]] === square[pattern[2]]
        ) {
          setWinner(square[pattern[0]]);
          return;
        }
      });
    }
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(null));
  };

  const handleClick = (num) => {
    if (cells[num] !== null) {
      alert("already clicked");
      return;
    }

    const square = [...cells];

    {
      turn === "X"
        ? [setTurn("O"), (square[num] = "X")]
        : [setTurn("X"), (square[num] = "O")];
    }
    setCells(square);
    calculateWinner(square);
    console.log(square);
  };

  return (
    <div className="container">
      <h3>Turn: {turn}</h3>
      <Grid
        handleClick={handleClick}
        handleRestart={handleRestart}
        cells={cells}
        winner={winner}
      />
    </div>
  );
};
