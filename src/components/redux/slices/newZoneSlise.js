import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zoneCounter: [{ id: 0 }],
};

export const newZoneSlise = createSlice({
  name: "newZone",
  initialState,
  reducers: {
    // setImagineOptions: (state, action) => {
    //     state.zoneCounter = action.payload
    // }
    addImagineOptions: (state, action) => {
      state.zoneCounter = [...state.zoneCounter, action.payload];
      // state.zoneCounter.push(action.payload);
    },
    deleteImagineOptions: (state, action) => {
      if (state.zoneCounter.length !== 1) {
        state.zoneCounter = state.zoneCounter.filter(
          (option) => option.id !== action.payload.id.id   );
      }

    // state.zoneCounter.map(
    //           (option) => console.log(option.id, action.payload.id)  );

    // console.log(action.payload.id.id)
    },
  },
});

export const { addImagineOptions, deleteImagineOptions } = newZoneSlise.actions;

export default newZoneSlise.reducer;
