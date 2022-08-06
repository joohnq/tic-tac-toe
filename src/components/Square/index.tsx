import React, { useState } from "react";
import './styles.css'

export function Square(props: { value: number}){
  function handleClick(i: (i: any) => void){
    console.log(i)
  }

    return (
      <button 
      className="square" 
      onClick={() => handleClick(i)}>
          {props.value}
        </button>
    )
  }

function i(i: any): void {
  throw new Error("Function not implemented.");
}
