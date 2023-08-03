import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: {
    home: true,
    resume: false,
    project: false,
    contact: false,
  },
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    gotoHome: (state) => {
     
      const activeLink = { ...state };
      activeLink.value.home = true;
      activeLink.value.resume = false;
      activeLink.value.contact = false;
      activeLink.value.project = false;
      
    },
    gotoProject: (state) => {
      const activeLink = { ...state };
      activeLink.value.home = false;
      activeLink.value.resume = false;
      activeLink.value.project = true;
      activeLink.value.contact = false;
    },
    gotoContact: (state) => {
      const activeLink = { ...state };
      activeLink.value.home = false;
      activeLink.value.resume = false;
      activeLink.value.project = false;
      activeLink.value.contact = true;
    },
    gotoResume: (state) => {
      const activeLink = { ...state };
      activeLink.value.home = false;
      activeLink.value.resume = true;
      activeLink.value.project = false;
      activeLink.value.contact = false;
    },
  },
});

export const { gotoContact, gotoProject, gotoResume, gotoHome } =
  navigationSlice.actions;
export default navigationSlice.reducer;
