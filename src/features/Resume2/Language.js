import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "English",
  languages: [],
};

export const resumeLanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguageInfo: (state, action) => {
      state.language = action.payload.language;
      state.languages = action.payload.languages;
    },
    unsetLanguageInfo: (state, action) => {
      state.language = action.payload.language;
      state.languages = action.payload.languages;
    },
  },
});

export const { setLanguageInfo, unsetLanguageInfo } = resumeLanguageSlice.actions;

export default resumeLanguageSlice.reducer;
