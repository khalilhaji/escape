import { createSlice } from "@reduxjs/toolkit";
import { codes, codeStatuses, gameLength, phase } from "../const";
import _ from "lodash";

export const codeSlice = createSlice({
  name: "code",
  initialState: {
    input: "",
    status: codeStatuses.ACCEPTED,
    phase: phase.START,
    codeMap: _.mapValues(codes, () => false),
    remainingCodes: 3,
    popupMessage: "",
  },

  reducers: {
    codeChanged: (state, action) => {
      if (state.status !== codeStatuses.TYPING) {
        return;
      }
      const code = action.payload;
      state.input = code;
      if (code.length === 4) {
        if (state.codeMap[code] === false) {
          state.status = codeStatuses.ACCEPTED;
          state.popupMessage = codes[code];
          state.codeMap[code] = true;
          if (state.remainingCodes === 1) {
            state.phase = phase.ENTER_DATE;
          } else {
            state.remainingCodes--;
          }
        } else {
          state.status = codeStatuses.REJECTED;
          state.popupMessage = "Invalid Code";
        }
      }
    },
    clear: (state) => {
      state.input = "";
      state.status = codeStatuses.TYPING;
      state.popupMessage = "";
    },
    phaseChange: (state, action) => {
      if (action.payload === phase.LOGIN) {
        state.countdown = Date.now() + 1000 * 60 * gameLength;
      }

      if (action.payload === phase.PLAYING) {
        state.popupMessage = "Access Granted";
      }
      state.phase = action.payload;
    },
    timeup: (state) => {
      state.phase = phase.GAME_OVER;
    },
  },
});

export const { codeChanged, clear, phaseChange, timeup } = codeSlice.actions;

export default codeSlice.reducer;
