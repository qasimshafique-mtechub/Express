import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  address: "",
  drivinglicense: "",
  email: "",
  contact_number: "",
  Image: "",
};

export const counterSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.drivinglicense = action.payload.drivinglicense;
      state.contact_number = action.payload.contact_number;
      state.image = action.payload.image;


    },
    unsetUserInfo: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.address = action.payload.address;
      state.drivinglicense = action.payload.drivinglicense;
      state.contact_number = action.payload.contact_number;
    },
  },
});

export const { setUserInfo, unsetUserInfo } = counterSlice.actions;

export default counterSlice.reducer;
