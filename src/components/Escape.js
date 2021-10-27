import React from "react";
import OtpInput from "react-otp-input";
import PropTypes from "prop-types";
import "./Escape.css";

export default class Escape extends React.Component {
  static propTypes = {
    code: PropTypes.string,
    onCodeChange: PropTypes.func,
  };

  render() {
    const { code, onCodeChange } = this.props;

    return (
      <div className="passcode-wrapper">
        <OtpInput
          value={code}
          onChange={onCodeChange}
          numInputs={4}
          separator={<span className="separator"></span>}
          inputStyle="passcode"
        />
      </div>
    );
  }
}
