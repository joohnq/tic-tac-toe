import React, { useState } from "react";
import './styles.css'

export class Square extends React.Component{
    render(){
        return(
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}