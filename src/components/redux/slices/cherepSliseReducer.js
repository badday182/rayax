import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Для корректного обновления использовать useEffect с dispatch в ImagineOptions
  cherepNormaNenorma: "",
  };

export const cherepSliseReducer = createSlice({
  name: "cherepNormaNenorma",
  initialState,
  reducers: {
    editCherepNormaNenorma: (state, action) => {
      // state.documentText = [...state.documentText, action.payload];
      const { selectedZone } = action.payload;
      state.cherepNormaNenorma = selectedZone         
    },
    resetCherepSliseReducer: (state) => {
            state.cherepNormaNenorma = ""         
    },
   
    
  },
});

export const {
  editCherepNormaNenorma, resetCherepSliseReducer
 
} = cherepSliseReducer.actions;

export default cherepSliseReducer.reducer;
