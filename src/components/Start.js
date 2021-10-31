import React from "react";
import PropTypes from "prop-types";
import { phase } from "../const";
import "./Start.scss";

export default class Start extends React.Component {
  static propTypes = {
    onPhaseChange: PropTypes.func,
  };

  render() {
    const { onPhaseChange } = this.props;

    return (
      <div className="top">
        <h1>Welcome to our escape room</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button
          className="fancy-button"
          onClick={() => {
            onPhaseChange(phase.LOGIN);
          }}
        >
          Start
        </button>
      </div>
    );
  }
}
