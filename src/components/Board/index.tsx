import React from "react";
import "./styles.css";
import { Square } from "../Square";

export class Board extends React.Component {
    renderSquare(i: number){
        return <Square value={i} />
    }   

  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board__row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
