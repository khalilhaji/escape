import React from "react";
import OtpInput from "react-otp-input";
import PropTypes from "prop-types";
import "./Code.css";
import PopUp from "./PopUp";
import { codeStatuses, codeStatusMap } from "../const";
import Expire from "react-expire";

export default class Code extends React.Component {
  static propTypes = {
    code: PropTypes.string,
    codeStatus: PropTypes.oneOf(Object.keys(codeStatuses)),
    onCodeChange: PropTypes.func,
    opPopupExpire: PropTypes.func,
    popupMessage: PropTypes.string,
  };

  render() {
    const { code, codeStatus, onCodeChange, onPopupExpire, popupMessage } =
      this.props;

    const popup =
      codeStatus === codeStatuses.TYPING ? (
        <></>
      ) : (
        <Expire until={1000} onExpire={onPopupExpire}>
          <PopUp
            popUpState={codeStatusMap[codeStatus].popup}
            msg={popupMessage}
          />
        </Expire>
      );

    return (
      <React.Fragment>
        <div className="passcode-wrapper">
          <OtpInput
            value={code}
            onChange={onCodeChange}
            numInputs={4}
            isDisabled={codeStatus !== codeStatuses.TYPING}
            separator={<span className="separator"></span>}
            inputStyle="passcode"
          />
          {popup}
        </div>
      </React.Fragment>
    );
  }
}
