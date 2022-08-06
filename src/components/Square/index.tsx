import React from "react";
import './styles.css'

export function Square(props: { value: number}){
    return (
      <button className="square">
          {props.value}
        </button>
    )
  }