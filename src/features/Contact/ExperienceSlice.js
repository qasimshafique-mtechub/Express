import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "",
  position: "",
  start_date: "",
  end_date: "",
  notes: "",
  locations:""

};

export const educationSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setEducationInfo: (state, action) => {
      state.company = action.payload.company;
      state.position = action.payload.position;
      state.start_date = action.payload.start_date;
      state.end_date = action.payload.end_date;
      state.notes = action.payload.notes;
      state.locations = action.payload.locations;

    },
    unsetEducationInfo: (state, action) => {
      state.company = action.payload.company;
      state.position = action.payload.position;
      state.start_date = action.payload.start_date;
      state.end_date = action.payload.end_date;
      state.end_date_end = action.payload.end_date_end;
      state.locations = action.payload.locations;
    },
  },
});

export const { setEducationInfo, unsetEducationInfo } = educationSlice.actions;

export default educationSlice.reducer;
