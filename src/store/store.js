import { configureStore } from "@reduxjs/toolkit";
import newZoneSliseReducer from '../components/redux/slices/newZoneSlise'
import documentSliseReducer from "../components/redux/slices/documentSliseReducer";

const store = configureStore({
    reducer: {
        creatingZones: newZoneSliseReducer,
        creatingDocument: documentSliseReducer
    }
})

export default store