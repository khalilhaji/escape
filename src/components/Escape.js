import React from "react";
import OtpInput from "react-otp-input";
import PropTypes from "prop-types";
import "./Escape.css";
import PopUp from "./PopUp";
import { codeStatuses } from "../const";
import Expire from "react-expire";

export default class Escape extends React.Component {
  static propTypes = {
    code: PropTypes.string,
    codeStatus: PropTypes.oneOf(Object.keys(codeStatuses)),
    onCodeChange: PropTypes.func,
  };

  render() {
    const { code, codeStatus, onCodeChange } = this.props;

    const popup =
      codeStatus === codeStatuses.TYPING ? (
        <></>
      ) : (
        <PopUp popUpState={codeStatus.popup} />
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
          <Expire>{popup}</Expire>
        </div>
      </React.Fragment>
    );
  }
}
