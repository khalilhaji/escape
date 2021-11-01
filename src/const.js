import { popUpStates } from "./components/PopUp";

export const codeStatuses = {
  TYPING: "TYPING",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
};

export const codeStatusMap = {
  [codeStatuses.ACCEPTED]: { popup: popUpStates.GRANTED, msg: "foo" },
  [codeStatuses.REJECTED]: { popup: popUpStates.DENIED, msg: "bar" },
};

export const phase = {
  START: "START",
  LOGIN: "LOGIN",
  PLAYING: "PLAYING",
  ENTER_DATE: "ENTER_DATE",
  TRAVEL: "TRAVEL",
  WIN: "WIN",
  GAME_OVER: "GAME_OVER",
};

export const codes = {
  6969: "Calibrating...",
  2579: "Calibrating...",
};

export const gameLength = 10;
