import React, { useState } from "react";
import { Square } from "../Square";
import "./styles.css";

export function Board(){
  function handleClick(i: number){

  }

  function renderSquare(i: number){
    return <Square value={squares[i]} />
  }

  const status = 'Next player: X';

  const [squares, setSquares] = useState(new Array(9).fill(null))

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board__row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
  </div>
  );
}