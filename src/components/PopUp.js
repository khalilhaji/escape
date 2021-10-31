import React from "react";
import PT from "prop-types";
import "./popup.css";

export const popUpStates = {
  GRANTED: {
    className: "accepted",
  },
  DENIED: {
    className: "rejected",
  },
};

export const PopUp = ({ popUpState, msg }) => {
  return (
    <div className={`popup ${popUpState.className}`}>
      <h2>{msg}</h2>
    </div>
  );
};

PopUp.propTypes = {
  popUpState: PT.object.isRequired,
};

export default PopUp;
