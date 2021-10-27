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
      state.status = codeStatuses.TYPING;
      const code = action.payload;
      state.code = code;
      if (code.length === 4) {
        if (code === "1234") {
          state.status = codeStatuses.ACCEPTED;
        } else {
          state.status = codeStatuses.REJECTED;
        }
        state.code = "";
      }
    },
  },
});

export const { codeChanged } = codeSlice.actions;

export default codeSlice.reducer;
