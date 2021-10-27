import { createSelector } from "reselect";

const codeSelector = (state) => state.code.code;

export const stateToPropsSelector = createSelector([codeSelector], (code) => ({
  code,
}));
