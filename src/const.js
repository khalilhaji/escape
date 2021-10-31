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
  1234: "Calibration",
  4321: "other thing",
  8765: "you did a thing",
};

export const gameLength = 20;
