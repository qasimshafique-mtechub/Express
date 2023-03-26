import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "ABC Company",
  position: "Web Developer",
  start_date: "Nov-12-2013",
  end_date: "June-6-2016",
  notes:
    "HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content",
  locations: "Gujar khan",
  experiences: [],
};

export const resumeexperienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setExperienceInfo: (state, action) => {
      state.company = action.payload.company;
      state.position = action.payload.position;
      state.start_date = action.payload.start_date;
      state.end_date = action.payload.end_date;
      state.notes = action.payload.notes;
      state.locations = action.payload.locations;
      state.experiences = action.payload.experiences;
    },
    unsetExperienceInfo: (state, action) => {
      state.company = action.payload.company;
      state.position = action.payload.position;
      state.start_date = action.payload.start_date;
      state.end_date = action.payload.end_date;
      state.end_date_end = action.payload.end_date_end;
      state.locations = action.payload.locations;
      state.experiences = action.payload.experiences;
    },
  },
});

export const { setExperienceInfo, unsetExperienceInfo } =
  resumeexperienceSlice.actions;

export default resumeexperienceSlice.reducer;
