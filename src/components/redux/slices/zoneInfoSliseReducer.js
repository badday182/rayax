import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    zone: "OGK",
    proaction: "ogliadova",
    side: "side",
    mSv: '____'
    
};

export const zoneInfoSliseReducer = createSlice({
    name: "documentText",
    initialState,
    reducers: {
        editZone: (state, action) => {
        // state.documentText = [...state.documentText, action.payload];

        state.zone = action.payload
          
        // console.log(action.payload)
        // console.log(action)
      },
      editProaction: (state, action) => {
        state.proaction = action.payload          
        // console.log(action.payload)
      },
        editSide: (state, action) => {
        state.side = action.payload
      },
        editMSv: (state, action) => {
        state.mSv = action.payload
      },
    },
  });
  
  export const { editZone,editProaction,editSide,editMSv } = zoneInfoSliseReducer.actions;
  
  export default zoneInfoSliseReducer.reducer;
  