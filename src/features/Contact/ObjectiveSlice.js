import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "",
};

export const objectiveSlice = createSlice({
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

export const { setObjectiveInfo, unsetObjectiveInfo } = objectiveSlice.actions;

export default objectiveSlice.reducer;
