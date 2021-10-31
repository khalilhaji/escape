import React from "react";

export default class GameOver extends React.Component {
  render() {
    return (
      <div className="top">
        <h1>Game over!!!</h1>
        <p>You were not able to escape :(</p>
        <p>Refresh this page to play again</p>
      </div>
    );
  }
}
