import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skill: "web developer",
  level: "intermediate",
  skills: [],
};

export const resumeskillSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setskillInfo: (state, action) => {
      state.skill = action.payload.skill;
      state.level = action.payload.level;
      state.skills = action.payload.skills;
    },
    unsetskillInfo: (state, action) => {
      state.skill = action.payload.skill;
      state.level = action.payload.level;
      state.skills = action.payload.skills;
    },
  },
});

export const { setskillInfo, unsetskillInfo } = resumeskillSlice.actions;

export default resumeskillSlice.reducer;
