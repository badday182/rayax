import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    zone: "OGK",
    proaction: "ogliadova",
    side: "",
    
};

export const zoneInfoSliseReducer = createSlice({
    name: "documentText",
    initialState,
    reducers: {
        editZone: (state, action) => {
        // state.documentText = [...state.documentText, action.payload];

        state.examNumber = action.payload
          
        // console.log(action.payload)
        // console.log(action)
      },
      editProaction: (state, action) => {
        state.examDate = action.payload          
        // console.log(action.payload)
      },
        editSide: (state, action) => {
        state.examName = action.payload
        // console.log(action.payload)
          
      },
    },
  });
  
  export const { editZone,editProaction,editSide } = zoneInfoSliseReducer.actions;
  
  export default zoneInfoSliseReducer.reducer;
  