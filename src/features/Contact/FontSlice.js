import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  font: "Arial",
  color: "",
};

export const fontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    setFontSize: (state, action) => {
      state.font = action.payload.font;
      state.color = action.payload.color;
    },
    unsetFontSize: (state, action) => {
      state.font = action.payload.font;
      state.color = action.payload.color;
    },
  },
});

export const { setFontSize, unsetFontSize } = fontSlice.actions;

export default fontSlice.reducer;
