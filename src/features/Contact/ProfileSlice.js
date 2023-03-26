import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  content: "",
  contact_number: "",

};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileInfo: (state, action) => {
      state.image = action.payload.image;
      state.content = action.payload.content;
      state.contact_number = action.payload.contact_number;

    },
    unsetProfileInfo: (state, action) => {
      state.image = action.payload.image;
      state.content = action.payload.content;
      state.contact_number = action.payload.contact_number;
    },
  },
});

export const { setProfileInfo, unsetProfileInfo } = profileSlice.actions;

export default profileSlice.reducer;
