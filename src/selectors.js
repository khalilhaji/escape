import { createStructuredSelector } from "reselect";

const codeSelector = (state) => state.code.code;

const codeStatusSelector = (state) => state.code.status;

export const stateToPropsSelector = createStructuredSelector({
  code: codeSelector,
  codeStatus: codeStatusSelector,
});
