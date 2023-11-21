import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Для корректного обновления использовать useEffect с dispatch в ImagineOptions
  commaUniversalText_1: "",
  commaUniversalArray_1: [],
  commaUniversalText_2: "",
  commaUniversalArray_2: [],
  commaUniversalText_3: "",
  commaUniversalArray_3: [],
  commaUniversalText_4: "",
  commaUniversalArray_4: [],
  commaUniversalText_5: "",
  commaUniversalArray_5: [],
  commaUniversalText_6: "",
  commaUniversalArray_6: [],

  svhVysotaTilHrebtsivText:[],
  svhVysotaTilHrebtsivArray:[],

  semicolonUniversalText_1: "",
  semicolonUniversalArray_1: [],
  // koreniText: "",
  // koreniArray: [],
  // synusyText: "",
  // synusyArray: [],
  // kupalaDiadragmyText: "",
  // kupalaDiadragmyArray: [],
  // corText: "",
  // corArray: [],
  // ogkZakliuchenniaText: "",
  // ogkZakliuchenniaArray: [],
};

export const universalSliceReducer = createSlice({
  name: "documentText",
  initialState,
  reducers: {
    editCommaUniversalArray_1: (state, action) => {
      // state.documentText = [...state.documentText, action.payload];
      const { floatingId, selectedZone } = action.payload;

      // Проверяем, есть ли в CommaUniversalArray_1 подмассив с первым элементом равным floatingId
      const index0 = state.commaUniversalArray_1.findIndex(
        (item) => item[0] === floatingId
      );
      // Если есть, подмассив с первым элементом равным floatingId то изменяем значение второго элемента подмассива на selectedZone
      if (index0 !== -1) {
        state.commaUniversalArray_1[index0][1] = selectedZone;
      } else {
        state.commaUniversalArray_1.push([floatingId, selectedZone]);
        // Если нет, то добавляем новый подмассив с парой [floatingId, selectedZone]
      }

      state.commaUniversalText_1 = state.commaUniversalArray_1
        .map((item) => item[1])
        .join(", ");
// console.log('state.commaUniversalText_1',state.commaUniversalText_1);
    },
    editCommaUniversalArray_2: (state, action) => {
      // state.documentText = [...state.documentText, action.payload];
      const { floatingId, selectedZone } = action.payload;

      // Проверяем, есть ли в CommaUniversalArray_1 подмассив с первым элементом равным floatingId
      const index0 = state.commaUniversalArray_2.findIndex(
        (item) => item[0] === floatingId
      );
      // Если есть, подмассив с первым элементом равным floatingId то изменяем значение второго элемента подмассива на selectedZone
      if (index0 !== -1) {
        state.commaUniversalArray_2[index0][1] = selectedZone;
      } else {
        state.commaUniversalArray_2.push([floatingId, selectedZone]);
        // Если нет, то добавляем новый подмассив с парой [floatingId, selectedZone]
      }

      state.commaUniversalText_2 = state.commaUniversalArray_2
        .map((item) => item[1])
        .join(", ");
// console.log('state.commaUniversalText_1',state.commaUniversalText_1);
    },
    editCommaUniversalArray_3: (state, action) => {
      const { floatingId, selectedZone } = action.payload;

      const index0 = state.commaUniversalArray_3.findIndex(
        (item) => item[0] === floatingId
      );
      if (index0 !== -1) {
        state.commaUniversalArray_3[index0][1] = selectedZone;
      } else {
        state.commaUniversalArray_3.push([floatingId, selectedZone]);
      }

      state.commaUniversalText_3 = state.commaUniversalArray_3
        .map((item) => item[1])
        .join(", ");
    },
    editCommaUniversalArray_4: (state, action) => {
      const { floatingId, selectedZone } = action.payload;

      const index0 = state.commaUniversalArray_4.findIndex(
        (item) => item[0] === floatingId
      );
      if (index0 !== -1) {
        state.commaUniversalArray_4[index0][1] = selectedZone;
      } else {
        state.commaUniversalArray_4.push([floatingId, selectedZone]);
      }

      state.commaUniversalText_4 = state.commaUniversalArray_4
        .map((item) => item[1])
        .join(", ");
    },
    editCommaUniversalArray_5: (state, action) => {
      const { floatingId, selectedZone } = action.payload;

      const index0 = state.commaUniversalArray_5.findIndex(
        (item) => item[0] === floatingId
      );
      if (index0 !== -1) {
        state.commaUniversalArray_5[index0][1] = selectedZone;
      } else {
        state.commaUniversalArray_5.push([floatingId, selectedZone]);
      }

      state.commaUniversalText_5 = state.commaUniversalArray_5
        .map((item) => item[1])
        .join(", ");
    },
    editCommaUniversalArray_6: (state, action) => {
      const { floatingId, selectedZone } = action.payload;

      const index0 = state.commaUniversalArray_6.findIndex(
        (item) => item[0] === floatingId
      );
      if (index0 !== -1) {
        state.commaUniversalArray_6[index0][1] = selectedZone;
      } else {
        state.commaUniversalArray_6.push([floatingId, selectedZone]);
      }

      state.commaUniversalText_6 = state.commaUniversalArray_6
        .map((item) => item[1])
        .join(", ");
    },
    editSvhVysotaTilHrebtsivArray: (state, action) => {
      const { floatingId, selectedZone } = action.payload;

      const index0 = state.svhVysotaTilHrebtsivArray.findIndex(
        (item) => item[0] === floatingId
      );
      if (index0 !== -1) {
        state.svhVysotaTilHrebtsivArray[index0][1] = selectedZone;
      } else {
        state.svhVysotaTilHrebtsivArray.push([floatingId, selectedZone]);
      }

      state.svhVysotaTilHrebtsivText = state.svhVysotaTilHrebtsivArray
      .map((item) => item[1])
      .join(", ");
  
    // Добавляем проверку и удаляем запятую перед 'в передньому/задньому вдділі С'
    if (state.svhVysotaTilHrebtsivText.includes(', в передньому/задньому вдділі С')) {
      state.svhVysotaTilHrebtsivText = state.svhVysotaTilHrebtsivText.replace(', в передньому/задньому вдділі С', ' в передньому/задньому вдділі С');
    }
    },


    editSemicolonUniversalArray_1: (state, action) => {
      // state.documentText = [...state.documentText, action.payload];
      const { floatingId, selectedZone } = action.payload;

      // Проверяем, есть ли в SemicolonUniversalArray_1 подмассив с первым элементом равным floatingId
      const index0 = state.semicolonUniversalArray_1.findIndex(
        (item) => item[0] === floatingId
      );
      // Если есть, подмассив с первым элементом равным floatingId то изменяем значение второго элемента подмассива на selectedZone
      if (index0 !== -1) {
        state.semicolonUniversalArray_1[index0][1] = selectedZone;
      } else {
        state.semicolonUniversalArray_1.push([floatingId, selectedZone]);
        // Если нет, то добавляем новый подмассив с парой [floatingId, selectedZone]
      }

      state.semicolonUniversalText_1 = state.semicolonUniversalArray_1
        .map((item) => item[1])
        .join("; ");
console.log('state.semicolonUniversalText_1', state.semicolonUniversalText_1);
    },
    editKoreniArray: (state, action) => {
      const { floatingId, selectedZone } = action.payload;
      const index0 = state.koreniArray.findIndex(
        (item) => item[0] === floatingId
      );
      if (index0 !== -1) {
        state.koreniArray[index0][1] = selectedZone;
      } else {
        state.koreniArray.push([floatingId, selectedZone]);
      }
      state.koreniText = state.koreniArray.map((item) => item[1]).join(", ");
    },
    resetKoreniArray: (state) => {
      state.koreniArray = [];
    },
    editSynusyArray: (state, action) => {
      const { floatingId, selectedZone } = action.payload;
      const index0 = state.synusyArray.findIndex(
        (item) => item[0] === floatingId
      );
      if (index0 !== -1) {
        state.synusyArray[index0][1] = selectedZone;
      } else {
        state.synusyArray.push([floatingId, selectedZone]);
      }
      state.synusyText = state.synusyArray.map((item) => item[1]).join(", ");
    },
    resetSynusyArray: (state) => {
      state.synusyArray = [];
    },
    editKupalaDiadragmyArray: (state, action) => {
      const { floatingId, selectedZone } = action.payload;
      const index0 = state.kupalaDiadragmyArray.findIndex(
        (item) => item[0] === floatingId
      );
      if (index0 !== -1) {
        state.kupalaDiadragmyArray[index0][1] = selectedZone;
      } else {
        state.kupalaDiadragmyArray.push([floatingId, selectedZone]);
      }
      state.kupalaDiadragmyText = state.kupalaDiadragmyArray
        .map((item) => item[1])
        .join(", ");
    },
    resetKupalaDiadragmyArray: (state) => {
      state.kupalaDiadragmyArray = [];
    },
    editCorArray: (state, action) => {
      const { floatingId, selectedZone } = action.payload;
      const index0 = state.corArray.findIndex((item) => item[0] === floatingId);
      if (index0 !== -1) {
        state.corArray[index0][1] = selectedZone;
      } else {
        state.corArray.push([floatingId, selectedZone]);
      }
      state.corText = state.corArray.map((item) => item[1]).join(", ");
      if (state.corText.includes(", ;")) {
        // Заменяем ", ;" на ";"
        state.corText = state.corText.replace(", ;", ";");
      }
      // Если в state.corText есть текст "; склероз дуги аорти" и он не в конце строки
      const searchText = "; склероз дуги аорти";
      if (
        state.corText.includes(searchText) &&
        !state.corText.endsWith(searchText)
      ) {
        // Убираем текст из текущего положения
        state.corText = state.corText.replace(searchText, "");
        // Добавляем в конец
        state.corText = state.corText + searchText;
      }
      // Удаляем ", " в начале строки, если есть
      if (state.corText.startsWith(", ")) {
        state.corText = state.corText.slice(2);
      }
    },
    resetCorArray: (state) => {
      state.corArray = [];
    },
    editOgkZakliuchenniaArray: (state, action) => {
      const { floatingId, selectedZone } = action.payload;
      const index0 = state.ogkZakliuchenniaArray.findIndex(
        (item) => item[0] === floatingId
      );
      if (index0 !== -1) {
        state.ogkZakliuchenniaArray[index0][1] = selectedZone;
      } else {
        state.ogkZakliuchenniaArray.push([floatingId, selectedZone]);
      }
      state.ogkZakliuchenniaText = state.ogkZakliuchenniaArray
        .map((item) => item[1])
        .join(". ");
    },
    resetOgkZakliuchenniaArray: (state) => {
      state.ogkZakliuchenniaArray = [];
    },
    resetUniversalSliceReducer: (state) => {

      state.commaUniversalText_1 = "";
      state.commaUniversalArray_1 = [];
      state.commaUniversalText_2 = "";
      state.commaUniversalArray_2 = [];
      state.commaUniversalText_3 = "";
      state.commaUniversalArray_3 = [];
      state.commaUniversalText_4 = "";
      state.commaUniversalArray_4 = [];
      state.commaUniversalText_5 = "";
      state.commaUniversalArray_5 = [];
      state.commaUniversalText_6 = "";
      state.commaUniversalArray_6 = [];

      state.svhVysotaTilHrebtsivText = [];
      state.svhVysotaTilHrebtsivArray = "";

      state.semicolonUniversalText_1 = "";
      state.semicolonUniversalArray_1 = [];
      // state.koreniText = "";
      // state.koreniArray = [];
      // state.synusyText = "";
      // state.synusyArray = [];
      // state.kupalaDiadragmyText = "";
      // state.kupalaDiadragmyArray = [];
      // state.corText = "";
      // state.corArray = [];
      // state.ogkZakliuchenniaText = "";
      // state.ogkZakliuchenniaArray = [];
    },
  },
});

export const {
  editCommaUniversalArray_1,
  editCommaUniversalArray_2,
  editCommaUniversalArray_3,
  editCommaUniversalArray_4,
  editCommaUniversalArray_5,
  editCommaUniversalArray_6,

  editSemicolonUniversalArray_1,

  editSvhVysotaTilHrebtsivArray,
  // resetLegenRusynokArray,
  // editKoreniArray,
  // resetKoreniArray,
  // editSynusyArray,
  // resetSynusyArray,
  // editKupalaDiadragmyArray,
  // resetKupalaDiadragmyArray,
  // editCorArray,
  // resetCorArray,
  // editOgkZakliuchenniaArray,
  // resetOgkZakliuchenniaArray,
  resetUniversalSliceReducer,
} = universalSliceReducer.actions;

export default universalSliceReducer.reducer;
