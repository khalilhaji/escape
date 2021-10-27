import { popUpStates } from "./components/PopUp";

export const codeStatuses = {
  TYPING: {},
  ACCEPTED: { popup: popUpStates.GRANTED },
  REJECTED: { popup: popUpStates.DENIED },
};
