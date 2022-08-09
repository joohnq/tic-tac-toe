import React from "react";
import "./styles.css";
import { Board } from "../Board";

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game__board">
          <Board />
        </div>
        <div className="game__info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
