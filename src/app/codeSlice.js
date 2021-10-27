import { createSlice } from "@reduxjs/toolkit";

export const codeSlice = createSlice({
  name: "code",
  initialState: {
    code: "",
  },

  reducers: {
    codeChanged: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const { codeChanged } = codeSlice.actions;

export default codeSlice.reducer;
