import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    zoneCounter: [{ id: 0 }],
}

export const newZoneSlise = createSlice({
    name: 'newZone',
    initialState,
    reducers: {
        // setImagineOptions: (state, action) => {
        //     state.zoneCounter = action.payload
        // }
        setImagineOptions: (state, action) => {
            // state.zoneCounter = [...state.zoneCounter, action];
            state.zoneCounter.push(action.payload);
          }
    }
})

export const {setImagineOptions} = newZoneSlise.actions

export default newZoneSlise.reducer