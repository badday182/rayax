import { configureStore } from "@reduxjs/toolkit";
import newZoneSliseReducer from '../components/redux/slices/newZoneSlise'

const store = configureStore({
    reducer: {
        creatingZones: newZoneSliseReducer
    }
})

export default store