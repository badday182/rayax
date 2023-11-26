import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  examNumber: "_________________",
  examDate: new Date()
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("."),
  examName: "_____________________",
  examBirthYear: "______",
};

export const pacientInfoSliseReducer = createSlice({
  name: "documentText",
  initialState,
  reducers: {
    editExamNumber: (state, action) => {
      // state.documentText = [...state.documentText, action.payload];

      state.examNumber = action.payload;

      // console.log(action.payload)
      // console.log(action)
    },
    editExamDate: (state, action) => {
      state.examDate = action.payload;
      // console.log(action.payload)
    },
    editExamName: (state, action) => {
      state.examName = action.payload;
      // console.log(action.payload)
    },
    editExamBirthYear: (state, action) => {
      state.examBirthYear = action.payload;
      // console.log(action.payload)
    },
    resetPacientInfoSliseReducer: (state) => {
      state.examNumber = "_________________";
      state.examDate = new Date()
        .toISOString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join(".");
        state.examName = "_____________________";
      state.examBirthYear = "______";
      // console.log(action.payload)
    },
  },
});

export const {
  editExamNumber,
  editExamDate,
  editExamName,
  editExamBirthYear,
  resetPacientInfoSliseReducer,
} = pacientInfoSliseReducer.actions;

export default pacientInfoSliseReducer.reducer;
