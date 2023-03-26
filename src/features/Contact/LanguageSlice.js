import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguageInfo: (state, action) => {
      state.language = action.payload.language;
    },
    unsetLanguageInfo: (state, action) => {
      state.language = action.payload.language;
    },
  },
});

export const { setLanguageInfo, unsetLanguageInfo } = languageSlice.actions;

export default languageSlice.reducer;
