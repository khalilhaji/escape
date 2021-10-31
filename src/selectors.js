import { createSelector, createStructuredSelector } from "reselect";

const codeSelector = (state) => state.code.input;

const typingSelector = (state) => state.code.typing;

const messageSelector = (state) => state.code.popupMessage;

const currentPhaseSelector = (state) => state.code.phase;

const countdownSelector = (state) => state.code.countdown;

const countdownTimeSelector = (state) => state.code.countdown;

const timeRemainingSelector = createSelector(
  countdownTimeSelector,
  (countdownTime) => {
    return (countdownTime - Date.now()) / (1000 * 60);
  }
);

const popupStateSelector = (state) => state.code.popupState;

export const stateToPropsSelector = createStructuredSelector({
  currentPhase: currentPhaseSelector,
  countdownDate: countdownSelector,
  timeRemaining: timeRemainingSelector,
  popupMessage: messageSelector,
  popupState: popupStateSelector,
  code: codeSelector,
  typing: typingSelector,
});
