import { configureStore } from "@reduxjs/toolkit";
import newZoneSliseReducer from '../components/redux/slices/newZoneSlise'
import documentSliseReducer from "../components/redux/slices/documentSliseReducer";
import pacientInfoSliseReducer from "../components/redux/slices/pacientInfoSliseReducer";

const store = configureStore({
    reducer: {
        creatingZones: newZoneSliseReducer,
        creatingDocument: documentSliseReducer,
        pacientInfo: pacientInfoSliseReducer,
    }
})

export default store