import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "<p>HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content</p>",
};

export const resumeobjectiveSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setObjectiveInfo: (state, action) => {
      state.content = action.payload.content;
    },
    unsetObjectiveInfo: (state, action) => {
        state.content = action.payload.content;

    },
  },
});

export const { setObjectiveInfo, unsetObjectiveInfo } = resumeobjectiveSlice.actions;

export default resumeobjectiveSlice.reducer;
