import React from "react";
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
import Expire from "react-expire";
import PopUp from "./PopUp";

export default class Escape extends React.Component {
  render() {
    const {
      code,
      typing,
      onCodeChange,
      onPopupExpire,
      onPhaseChange,
      currentPhase,
      onTimeup,
      countdownDate,
      timeRemaining,
      popupMessage,
      popupState,
      triggerPopup,
    } = this.props;

    const screenMap = {
      [phase.START]: <Start onPhaseChange={onPhaseChange} />,
      [phase.LOGIN]: (
        <Login
          onPhaseChange={onPhaseChange}
          triggerPopup={triggerPopup}
          typing={typing}
        />
      ),
      [phase.PLAYING]: (
        <Code code={code} typing={typing} onCodeChange={onCodeChange} />
      ),
      [phase.ENTER_DATE]: (
        <DateEntry onPhaseChange={onPhaseChange} triggerPopup={triggerPopup} />
      ),
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

    const popup =
      popupMessage === "" ? (
        <></>
      ) : (
        <Expire until={1000} onExpire={onPopupExpire}>
          <PopUp popUpState={popupState} msg={popupMessage} />
        </Expire>
      );

    return (
      <div className="outer">
        {popup}
        {countdown}
        {screenMap[currentPhase]}
      </div>
    );
  }
}
