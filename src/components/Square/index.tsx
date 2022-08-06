import React from "react";
import './style.css'

export function Square(props: { value: number}){
    return (
      <button className="square">
          {props.value}
        </button>
    )
  }