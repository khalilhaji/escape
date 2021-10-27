import { createSlice } from "@reduxjs/toolkit";
import { codeStatuses } from "../const";

export const codeSlice = createSlice({
  name: "code",
  initialState: {
    code: "",
    status: codeStatuses.TYPING,
  },

  reducers: {
    codeChanged: (state, action) => {
      if (state.status !== codeStatuses.TYPING) {
        return;
      }
      state.status = codeStatuses.TYPING;
      const code = action.payload;
      state.code = code;
      if (code.length === 4) {
        if (code === "1234") {
          state.status = codeStatuses.ACCEPTED;
        } else {
          state.status = codeStatuses.REJECTED;
        }
      }
    },
    clear: (state) => {
      state.code = "";
      state.status = codeStatuses.TYPING;
    },
  },
});

export const { codeChanged, clear } = codeSlice.actions;

export default codeSlice.reducer;
