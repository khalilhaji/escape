import { createSlice } from "@reduxjs/toolkit";
import { codes, gameLength, phase } from "../const";
import _ from "lodash";
import { popUpStates } from "../components/PopUp";

export const codeSlice = createSlice({
  name: "code",
  initialState: {
    input: "",
    typing: false,
    phase: phase.START,
    codeMap: _.mapValues(codes, () => false),
    remainingCodes: Object.keys(codes).length,
    popupMessage: "",
    popupState: popUpStates.GRANTED,
  },

  reducers: {
    codeChanged: (state, action) => {
      if (!state.typing) {
        return;
      }
      const code = action.payload;
      state.input = code;
      if (code.length === 4) {
        if (state.codeMap[code] === false) {
          state.typing = false;
          state.popupMessage = codes[code];
          state.popupState = popUpStates.GRANTED;
          state.codeMap[code] = true;
          if (state.remainingCodes === 1) {
            state.phase = phase.ENTER_DATE;
          } else {
            state.remainingCodes--;
          }
        } else {
          state.typing = false;
          state.popupState = popUpStates.DENIED;
          state.popupMessage = "Invalid Code";
        }
      }
    },
    clear: (state) => {
      state.input = "";
      state.typing = true;
      state.popupMessage = "";
    },
    phaseChange: (state, action) => {
      state.typing = true;
      if (action.payload === phase.LOGIN) {
        state.countdown = Date.now() + 1000 * 60 * gameLength;
      }

      if (action.payload === phase.PLAYING) {
        state.popupMessage = "Access Granted";
        state.popupState = popUpStates.GRANTED;
        state.typing = false;
      }
      state.phase = action.payload;
    },
    timeup: (state) => {
      state.phase = phase.GAME_OVER;
    },
    popup: (state, action) => {
      state.popupMessage = action.payload.message;
      state.popupState = action.payload.state;
      state.typing = false;
    },
  },
});

export const { codeChanged, clear, phaseChange, timeup, popup } =
  codeSlice.actions;

export default codeSlice.reducer;
