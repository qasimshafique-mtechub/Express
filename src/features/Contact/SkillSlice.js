import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skill: "web developer",
  level: "intermediate",
};

export const skillSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setskillInfo: (state, action) => {
      state.skill = action.payload.skill;
      state.level = action.payload.level;
    },
    unsetskillInfo: (state, action) => {
        state.skill = action.payload.skill;
        state.level = action.payload.level;
    },
  },
});

export const { setskillInfo, unsetskillInfo } = skillSlice.actions;

export default skillSlice.reducer;
