import React from "react";
import PT from "prop-types";
import "./popup.css";

export const popUpStates = {
  GRANTED: {
    className: "accepted",
    text: "Correct",
  },
  DENIED: {
    className: "rejected",
    text: "Calibration Error",
  },
};

export const PopUp = ({ popUpState }) => {
  return (
    <div className={`popup ${popUpState.className}`}>
      <h2>{popUpState.text}</h2>
    </div>
  );
};

PopUp.propTypes = {
  popUpState: PT.object.isRequired,
};

export default PopUp;
