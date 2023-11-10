import { configureStore } from "@reduxjs/toolkit";
import newZoneSliseReducer from '../components/redux/slices/newZoneSlise'
import documentSliseReducer from "../components/redux/slices/documentSliseReducer";
import pacientInfoSliseReducer from "../components/redux/slices/pacientInfoSliseReducer";
import zoneInfoSliseReducer from "../components/redux/slices/zoneInfoSliseReducer";
import ogkSliseReducer from "../components/redux/slices/ogkSliseReducer";

const store = configureStore({
    reducer: {
        creatingZones: newZoneSliseReducer,
        creatingDocument: documentSliseReducer,
        pacientInfo: pacientInfoSliseReducer,
        zoneInfo: zoneInfoSliseReducer,
        ogkInfo: ogkSliseReducer,
    }
})

export default store