import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  documentText: '',
};

export const documentSliseReducer = createSlice({
  name: "documentText",
  initialState,
  reducers: {
    addDocText: (state, action) => {
      // state.documentText = [...state.documentText, action.payload];
      state.documentText += action.payload
      


      console.log(state.documentText)
      // console.log(action.payload)
    },
  },
});

export const { addDocText } = documentSliseReducer.actions;

export default documentSliseReducer.reducer;
