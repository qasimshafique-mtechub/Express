import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "Qasim",
  lastname: "Shafique",
  address: "barky jadeed ward no 3",
  email: "qasim@gmail.com",
  contact_number: "saasasa",
  image: "/image/Icon open-account-logout.png",
  random_id: null
};

export const resumecounterSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContactInfo: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.contact_number = action.payload.contact_number;
      state.image = action.payload.image;
      state.random_id = action.payload.random_id;
    },
    unsetContactInfo: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.address = action.payload.address;
      state.drivinglicense = action.payload.drivinglicense;
      state.contact_number = action.payload.contact_number;
      state.random_id = action.payload.random_id;
    },
  },
});

export const { setContactInfo, unsetContactInfo } = resumecounterSlice.actions;

export default resumecounterSlice.reducer;
