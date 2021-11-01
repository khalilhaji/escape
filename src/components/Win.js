import React from "react";

export default class Win extends React.Component {
  render() {
    const { timeRemaining } = this.props;
    return (
      <div className="top">
        <h1>You escaped with {Math.floor(timeRemaining)} minutes remaining!</h1>
      </div>
    );
  }
}
