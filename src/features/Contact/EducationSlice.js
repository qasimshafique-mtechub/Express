import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  institute: "",
  degree: "",
  location: "",
  graduation_year_start: "",
  graduation_year_end: "",

  form:""

};

export const educationSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setEducationInfo: (state, action) => {
      state.institute = action.payload.institute;
      state.degree = action.payload.degree;
      state.location = action.payload.location;
      state.graduation_year = action.payload.graduation_year;
      state.graduation_year_end = action.payload.graduation_year_end;
      state.form = action.payload.form;
    },
    unsetEducationInfo: (state, action) => {
      state.institute = action.payload.institute;
      state.degree = action.payload.degree;
      state.location = action.payload.location;
      state.graduation_year = action.payload.graduation_year;
      state.graduation_year_end = action.payload.graduation_year_end;
      state.form = action.payload.form;
    },
  },
});

export const { setEducationInfo, unsetEducationInfo } = educationSlice.actions;

export default educationSlice.reducer;
