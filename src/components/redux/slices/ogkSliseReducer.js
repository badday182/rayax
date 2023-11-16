import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Для корректного обновления использовать useEffect с dispatch в ImagineOptions
  legenRusynokText: '',
  legenRusynokArray: [],
  koreniText: '',
  koreniArray: [],
  synusyText: '',
  synusyArray: [],
  kupalaDiadragmyText: '',
  kupalaDiadragmyArray: [],
  corText: '',
  corArray: [],
  ogkZakliuchenniaText: '',
  ogkZakliuchenniaArray: [],
};

export const ogkSliseReducer = createSlice({
  name: "documentText",
  initialState,
  reducers: {
    editLegenRusynokArray: (state, action) => {
      // state.documentText = [...state.documentText, action.payload];
      const {floatingId,selectedZone} = action.payload;

      // if (state.legenRusynokArray === "") {
      //   // state.legenRusynokArray = action.payload;
      //   // state.legenRusynokArray = selectedZone;
      //   // console.log(selectedZone);
      // }

      // if (!state.legenRusynokArray.includes(action.payload)) {
      //   state.legenRusynokArray = state.legenRusynokArray + ", " + action.payload;
      // }

      // Проверяем, есть ли в legenRusynokArray подмассив с первым элементом равным floatingId
      const index0 = state.legenRusynokArray.findIndex(
        (item) => item[0] === floatingId
        );
      // Проверяем, есть ли в legenRusynokArray подмассив со вторым элементом равным selectedZone
      // const index1 = state.legenRusynokArray.findIndex(
      //   (item) => item[1] === selectedZone
      //   );
        // console.log(index);

      // Если есть, подмассив с первым элементом равным floatingId то изменяем значение второго элемента подмассива на selectedZone
      if (index0 !== -1) {
        state.legenRusynokArray[index0][1] = selectedZone;
      } else {
        
    //     if (index1 === 0) {
    //   console.log(selectedZone);

    // }
    state.legenRusynokArray.push([floatingId, selectedZone]);
        // Если нет, то добавляем новый подмассив с парой [floatingId, selectedZone]
      };
      
              state.legenRusynokText = state.legenRusynokArray.map((item) => item[1]).join(", ");

      // state.legenRusynokArray.push([floatingId, selectedZone]);
      // state.legenRusynokArray.push([floatingId + 2, selectedZone + 2]);
      // state.legenRusynokArray.push({ floatingId, selectedZone });
      // state.legenRusynokArray = [...state.legenRusynokArray, [floatingId, selectedZone]];
      
      // console.log(state.legenRusynokArray);
      // console.log(selectedZone);
      // console.log(state.legenRusynokArray);
      // console.log(state.legenRusynokArray[0][0]);
      // console.log(state.legenRusynokArray[0][1]);
      // console.log(state.legenRusynokArray[1][0]);
      // console.log(state.legenRusynokArray[1][1]);
    },
    resetLegenRusynokArray: (state) => {
      state.legenRusynokArray = []
    },
    editKoreniArray: (state, action) => {
      const {floatingId,selectedZone} = action.payload;
      const index0 = state.koreniArray.findIndex(
        (item) => item[0] === floatingId
        );
      if (index0 !== -1) {
        state.koreniArray[index0][1] = selectedZone;
      } else {
    state.koreniArray.push([floatingId, selectedZone]);
      };   
      state.koreniText = state.koreniArray.map((item) => item[1]).join(", ");
      },
    resetKoreniArray: (state) => {
      state.koreniArray = []
    },
    editSynusyArray: (state, action) => {
      const {floatingId,selectedZone} = action.payload;
      const index0 = state.synusyArray.findIndex(
        (item) => item[0] === floatingId
        );
      if (index0 !== -1) {
        state.synusyArray[index0][1] = selectedZone;
      } else {
    state.synusyArray.push([floatingId, selectedZone]);
      };   
      state.synusyText = state.synusyArray.map((item) => item[1]).join(", ");
      },
    resetSynusyArray: (state) => {
      state.synusyArray = []
    },
    editKupalaDiadragmyArray: (state, action) => {
      const {floatingId,selectedZone} = action.payload;
      const index0 = state.kupalaDiadragmyArray.findIndex(
        (item) => item[0] === floatingId
        );
      if (index0 !== -1) {
        state.kupalaDiadragmyArray[index0][1] = selectedZone;
      } else {
    state.kupalaDiadragmyArray.push([floatingId, selectedZone]);
      };   
      state.kupalaDiadragmyText = state.kupalaDiadragmyArray.map((item) => item[1]).join(", ");
      },
    resetKupalaDiadragmyArray: (state) => {
      state.kupalaDiadragmyArray = []
    },
    editCorArray: (state, action) => {
      const {floatingId,selectedZone} = action.payload;
      const index0 = state.corArray.findIndex(
        (item) => item[0] === floatingId
        );
      if (index0 !== -1) {
        state.corArray[index0][1] = selectedZone;
      } else {
    state.corArray.push([floatingId, selectedZone]);
      };   
      state.corText = state.corArray.map((item) => item[1]).join(", ");
      if (state.corText.includes(", ;")) {
        // Заменяем ", ;" на ";"
        state.corText = state.corText.replace(", ;", ";");
      }
      },
    resetCorArray: (state) => {
      state.corArray = []
    },
    editOgkZakliuchennia: (state, action) => {
      const {floatingId,selectedZone} = action.payload;
      const index0 = state.ogkZakliuchenniaArray.findIndex(
        (item) => item[0] === floatingId
        );
      if (index0 !== -1) {
        state.ogkZakliuchenniaArray[index0][1] = selectedZone;
      } else {
    state.ogkZakliuchenniaArray.push([floatingId, selectedZone]);
      };   
      state.ogkZakliuchenniaText = state.ogkZakliuchenniaArray.map((item) => item[1]).join(". ");
      },
    resetOgkZakliuchennia: (state) => {
      state.ogkZakliuchenniaArray = []
    },

  },
});

export const { editLegenRusynokArray, resetLegenRusynokArray, editKoreniArray, resetKoreniArray, editSynusyArray, resetSynusyArray, editKupalaDiadragmyArray, resetKupalaDiadragmyArray, editCorArray, resetCorArray, editOgkZakliuchennia, resetOgkZakliuchennia  } = ogkSliseReducer.actions;

export default ogkSliseReducer.reducer;
