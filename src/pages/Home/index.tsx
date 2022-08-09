import React from "react";
import { Title } from "../../components/Title";
import { Game } from "../../components/Game";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Game />
      </div>
    );
  }
}
