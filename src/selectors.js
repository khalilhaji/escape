import { createSelector, createStructuredSelector } from "reselect";

const codeSelector = (state) => state.code.input;

const codeStatusSelector = (state) => state.code.status;

const messageSelector = (state) => state.code.popupMessage;

const codePropsSelcetor = createStructuredSelector({
  code: codeSelector,
  codeStatus: codeStatusSelector,
  popupMessage: messageSelector,
});

const currentPhaseSelector = (state) => state.code.phase;

const countdownSelector = (state) => state.code.countdown;

const countdownTimeSelector = (state) => state.code.countdown;

const timeRemainingSelector = createSelector(
  countdownTimeSelector,
  (countdownTime) => {
    return (countdownTime - Date.now()) / (1000 * 60);
  }
);

export const stateToPropsSelector = createStructuredSelector({
  codeProps: codePropsSelcetor,
  currentPhase: currentPhaseSelector,
  countdownDate: countdownSelector,
  timeRemaining: timeRemainingSelector,
});
