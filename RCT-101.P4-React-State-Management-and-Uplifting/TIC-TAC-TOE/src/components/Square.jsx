import React from "react";
import "./Square.css";

export const Square = ({ handleClick, cells }) => {
  const Cell = ({ num }) => {
    return (
      <td className="td-cell" onClick={() => handleClick(num)}>
        {cells[num]}
      </td>
    );
  };

  return (
    <div className="square-container">
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
