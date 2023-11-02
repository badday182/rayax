import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    examNumber: "_________________",
    examDate: new Date().toISOString().slice(0, 10).split("-").reverse().join("."),
    examName: "_____________________",
    examBirthYear: '______',
    
};

export const pacientInfoSliseReducer = createSlice({
    name: "documentText",
    initialState,
    reducers: {
        editExamNumber: (state, action) => {
        // state.documentText = [...state.documentText, action.payload];

        state.examNumber = action.payload
          
        // console.log(action.payload)
        // console.log(action)
      },
        editExamDate: (state, action) => {
        state.examDate = action.payload          
      },
        editExamName: (state, action) => {
        state.examName = action.payload          
      },
        editExamBirthYear: (state, action) => {
        state.examBirthYear = action.payload          
      },
    },
  });
  
  export const { editExamNumber,editExamDate,editExamName, editExamBirthYear } = pacientInfoSliseReducer.actions;
  
  export default pacientInfoSliseReducer.reducer;
  