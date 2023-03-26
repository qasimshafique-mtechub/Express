import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intrest: "",
};

export const intrestSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    setIntrestInfo: (state, action) => {
      state.intrest = action.payload.intrest;
    },
    unsetIntrestInfo: (state, action) => {
        state.intrest = action.payload.intrest;

    },
  },
});

export const { setIntrestInfo, unsetIntrestInfo } = intrestSlice.actions;

export default intrestSlice.reducer;
