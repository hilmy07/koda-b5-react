import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // tidak ambil dari localStorage
};

const surveyResult = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addSurvey: (state, action) => {
      state.data.push(action.payload);
    },
    deleteSurvey: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addSurvey, deleteSurvey } = surveyResult.actions;

export default surveyResult.reducer;
