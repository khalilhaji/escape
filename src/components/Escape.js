import React from "react";
import OtpInput from "react-otp-input";
import PropTypes from "prop-types";
import "./Escape.css";
import PopUp from "./PopUp";
import { codeStatuses, codeStatusMap } from "../const";
import Expire from "react-expire";

export default class Escape extends React.Component {
  static propTypes = {
    code: PropTypes.string,
    codeStatus: PropTypes.oneOf(Object.keys(codeStatuses)),
    onCodeChange: PropTypes.func,
  };

  render() {
    const { code, codeStatus, onCodeChange, onPopupExpire } = this.props;

    const popup =
      codeStatus === codeStatuses.TYPING ? (
        <></>
      ) : (
        <Expire until={3000} onExpire={onPopupExpire}>
          <PopUp popUpState={codeStatusMap[codeStatus]} />
        </Expire>
      );

    return (
      <React.Fragment>
        <div className="passcode-wrapper">
          <OtpInput
            value={code}
            onChange={onCodeChange}
            numInputs={4}
            separator={<span className="separator"></span>}
            inputStyle="passcode"
          />
          {popup}
        </div>
      </React.Fragment>
    );
  }
}
