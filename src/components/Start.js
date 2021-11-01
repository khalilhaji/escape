import React from "react";
import { phase } from "../const";
import "./Start.scss";

export default class Start extends React.Component {
  render() {
    const { onPhaseChange } = this.props;

    return (
      <div className="top">
        <h3>Time Labs High Security Computing Cluster</h3>

        <div className="email">
          <h4>Subject: Our Only Hope</h4>
          <h4>From: aoun@northeastern.edu</h4>
          <br />
          <p>To whomever finds this,</p>
          <p>
            My efforts at containing this pandemic have failed. The last 10
            years of my research were for nothing. As a last resort, I am
            writing this email with the hopes that some day after my death
            someone will discover the cure. If you are reading this and that is
            in fact the case, you are our last hope for saving the world. The
            lab you are standing in was once the workplace of the smartest minds
            in time research. Using your own scientific expertise along with
            what was left behind in this lab, you should be able to calibrate
            the machine to go back and stop the pandemic before it begins.
          </p>
          <br />
          <p>
            To begin, you must click the start button below. This will start
            drawing power from the lab's main reactor. Be warned that once this
            process begins, you must calibrate and activate the machine within
            20 minutes or the circuit will draw too much power from the reactor
            and render the machine irreparably broken. The calibration program
            is password protected. The scientist that programmed it was known
            for having a bad memory so they disguised the password in plain
            sight near the computer. Good luck!
          </p>
        </div>
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
