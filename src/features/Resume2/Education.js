import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  institute: "Virtual University",
  degree: "MCS",
  location: "Gujar khan",
  graduation_year: "2019",
  graduation_year_end: "2021",
  description: "HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content",
  educations: [],
};

export const resumeeducationSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setEducationInfo: (state, action) => {
      state.institute = action.payload.institute;
      state.degree = action.payload.degree;
      state.location = action.payload.location;
      state.graduation_year = action.payload.graduation_year;
      state.graduation_year_end = action.payload.graduation_year_end;
      state.educations = action.payload.educations;
      state.description = action.payload.description;

    },
    unsetEducationInfo: (state, action) => {
      state.institute = action.payload.institute;
      state.degree = action.payload.degree;
      state.location = action.payload.location;
      state.graduation_year = action.payload.graduation_year;
      state.graduation_year_end = action.payload.graduation_year_end;
      state.description = action.payload.description;
      state.educations = action.payload.educations;

    },
  },
});

export const { setEducationInfo, unsetEducationInfo } =
  resumeeducationSlice.actions;

export default resumeeducationSlice.reducer;
