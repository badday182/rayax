import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
          (option) => option.id !== action.payload.id   );
      }

    },
    resetImagineOptions: (state) => {
      state.zoneCounter = [{ id: uuidv4() }];
      // state.zoneCounter.push(action.payload);
    },
  },
});

export const { addImagineOptions, deleteImagineOptions, resetImagineOptions } = newZoneSlise.actions;

export default newZoneSlise.reducer;
