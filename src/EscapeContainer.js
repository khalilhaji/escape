import { connect } from "react-redux";
import Escape from "./components/Escape";
import { stateToPropsSelector } from "./selectors";
import { codeChanged } from "./app/codeSlice";

const mapStateToProps = (state) => stateToPropsSelector(state);

const mapDispatchToProps = (dispatch) => {
  return {
    onCodeChange: (code) => {
      dispatch(codeChanged(code));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Escape);
