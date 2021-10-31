import React from "react";
import OtpInput from "react-otp-input";
import "./Code.css";

export default class Code extends React.Component {
  render() {
    const { code, typing, onCodeChange } = this.props;

    return (
      <React.Fragment>
        <div className="passcode-wrapper">
          <OtpInput
            value={code}
            onChange={onCodeChange}
            numInputs={4}
            isDisabled={!typing}
            separator={<span className="separator"></span>}
            inputStyle="passcode"
          />
        </div>
      </React.Fragment>
    );
  }
}
