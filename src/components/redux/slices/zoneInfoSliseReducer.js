import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Для корректного обновления использовать useEffect с dispatch в ImagineOptions
    zone: "ОГК",
    proaction: "Оглядова",
    side: "Справа",
    norma: ""
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
        resetZone: (state) => {
        state.zone = "ОГК"          
      },
      editProaction: (state, action) => {
        state.proaction = action.payload          
        // console.log(action.payload)
      },
      resetProaction: (state) => {
        state.proaction = "Оглядова"          
      },
        editSide: (state, action) => {
        state.side = action.payload
      },
      resetSide: (state) => {
        state.side = "Справа"
      },
        editNorma: (state, action) => {
        state.norma = action.payload
      },
      resetNorma: (state) => {
        state.norma = ""
      },
    },
  });
  
  export const { editZone,editProaction,editSide,editNorma,resetZone,resetNorma,resetSide,resetProaction } = zoneInfoSliseReducer.actions;
  
  export default zoneInfoSliseReducer.reducer;
  