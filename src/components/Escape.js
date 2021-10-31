import React from "react";
import PropTypes from "prop-types";
import "./Escape.css";
import Code from "./Code";
import { phase } from "../const";
import Start from "./Start";
import Countdown from "react-countdown";
import Login from "./Login";
import GameOver from "./GameOver";
import DateEntry from "./DateEntry";
import Travel from "./Travel";
import Win from "./Win";

export default class Escape extends React.Component {
  static propTypes = {
    codeProps: PropTypes.shape(Code.propTypes),
    currentPhase: PropTypes.oneOf(Object.keys(phase)),
    onCodeChange: PropTypes.func,
    onPopupExpire: PropTypes.func,
    onPhaseChange: PropTypes.func,
    onTimeup: PropTypes.func,
    timeRemaining: PropTypes.number,
  };

  render() {
    const {
      codeProps,
      onCodeChange,
      onPopupExpire,
      onPhaseChange,
      currentPhase,
      onTimeup,
      countdownDate,
      timeRemaining,
    } = this.props;

    const screenMap = {
      [phase.START]: <Start onPhaseChange={onPhaseChange} />,
      [phase.LOGIN]: <Login onPhaseChange={onPhaseChange} />,
      [phase.PLAYING]: (
        <Code
          {...codeProps}
          onCodeChange={onCodeChange}
          onPopupExpire={onPopupExpire}
        />
      ),
      [phase.ENTER_DATE]: <DateEntry onPhaseChange={onPhaseChange} />,
      [phase.TRAVEL]: <Travel onPhaseChange={onPhaseChange} />,
      [phase.GAME_OVER]: <GameOver />,
      [phase.WIN]: <Win timeRemaining={Math.floor(timeRemaining)} />,
    };

    const countdown =
      currentPhase !== phase.START ? (
        <div className="countdown">
          <h1>
            <Countdown
              date={countdownDate}
              zeroPadDays={0}
              onComplete={onTimeup}
            />
          </h1>
        </div>
      ) : (
        <></>
      );

    return (
      <div className="outer">
        {countdown}
        {screenMap[currentPhase]}
      </div>
    );
  }
}
