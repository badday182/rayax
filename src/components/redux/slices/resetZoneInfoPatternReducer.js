import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reseter: true,
 
};

export const resetZoneInfoPatternReducer = createSlice({
  name: "ZoneInfoPatternResetState",
  initialState,
  reducers: {
    resetZoneInfoPattern: (state) => {
      state.reseter = !state.reseter

    
    },
  }
})
export const { resetZoneInfoPattern } = resetZoneInfoPatternReducer.actions;

export default resetZoneInfoPatternReducer.reducer;
