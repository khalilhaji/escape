import { connect } from "react-redux";
import Escape from "./components/Escape";
import { stateToPropsSelector } from "./selectors";
import {
  clear,
  codeChanged,
  phaseChange,
  popup,
  timeup,
} from "./app/codeSlice";

const mapStateToProps = (state) => stateToPropsSelector(state);

const mapDispatchToProps = (dispatch) => {
  return {
    onCodeChange: (code) => {
      dispatch(codeChanged(code));
    },
    onPopupExpire: () => {
      dispatch(clear());
    },
    onPhaseChange: (phase) => {
      dispatch(phaseChange(phase));
    },
    onTimeup: () => {
      dispatch(clear);
      dispatch(timeup());
    },
    triggerPopup: (message, state) => {
      dispatch(
        popup({
          message,
          state,
        })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Escape);
