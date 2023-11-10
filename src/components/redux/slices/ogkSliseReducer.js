import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Для корректного обновления использовать useEffect с dispatch в ImagineOptions
    legenRusynok: "",
    koreni: "структурні",
    kupalaDiafragmy: "чіткі",
    synusy: "вільні",
    cor: "Б/O",
    zakliuchennia: "R-ознаки застійних явищь у МКК",
};

export const ogkSliseReducer = createSlice({
    name: "documentText",
    initialState,
    reducers: {
        editLegenRusynok: (state, action) => {
        // state.documentText = [...state.documentText, action.payload];
if (!state.legenRusynok.includes(action.payload))  {

  state.legenRusynok = state.legenRusynok + ", " + action.payload
}
          
},
        edit0LegenRusynok: (state, action) => {
        // state.documentText = [...state.documentText, action.payload];
// if (state.legenRusynok !== action.payload ) {

  state.legenRusynok = action.payload
// }
          
},
editProaction: (state, action) => {
  state.proaction = action.payload          
  // console.log(action.payload)
  // console.log(action)
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
  
  export const { editLegenRusynok,edit0LegenRusynok, } = ogkSliseReducer.actions;
  
  export default ogkSliseReducer.reducer;
  