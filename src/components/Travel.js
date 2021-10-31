import React from "react";
import { phase } from "../const";

export default class Travel extends React.Component {
  static propTypes = {};

  render() {
    const { onPhaseChange } = this.props;

    return (
      <div className="top">
        <p>
          {" "}
          Congratulations you have successfully configured the time machine.
        </p>
        <p>
          Click the button below to travel back to the date you entered on the
          previous screen
        </p>

        <button
          className="fancy-button"
          onClick={() => {
            onPhaseChange(phase.WIN);
          }}
        >
          Travel
        </button>
      </div>
    );
  }
}
