import { popUpStates } from "./components/PopUp";

export const codeStatuses = {
  TYPING: "TYPING",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
};

export const codeStatusMap = {
  [codeStatuses.ACCEPTED]: popUpStates.GRANTED,
  [codeStatuses.REJECTED]: popUpStates.DENIED,
};
