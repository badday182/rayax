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
      editProaction: (state, action) => {
        state.proaction = action.payload          
        // console.log(action.payload)
      },
        editSide: (state, action) => {
        state.side = action.payload
      },
        editNorma: (state, action) => {
        state.norma = action.payload
      },
    },
  });
  
  export const { editZone,editProaction,editSide,editNorma } = zoneInfoSliseReducer.actions;
  
  export default zoneInfoSliseReducer.reducer;
  