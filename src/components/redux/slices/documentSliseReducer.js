import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  documentText: '',
};

export const documentSliseReducer = createSlice({
  name: "documentText",
  initialState,
  reducers: {
    addDocText: (state, action) => {
      // const { formattedDate, naprav, name, birthYear } = action.payload;
      const { textToDoc } = action.payload;
      // const { PacientInfoPattern } = action.payload;
      // state.documentText = [...state.documentText, action.payload];

      state.documentText += `${textToDoc}`
      


      // console.log(state.documentText)
      // console.log(action.payload.naprav)
    },
  },
});

export const { addDocText } = documentSliseReducer.actions;

export default documentSliseReducer.reducer;
