import { configureStore } from "@reduxjs/toolkit";
import newZoneSliseReducer from '../components/redux/slices/newZoneSlise'
import documentSliseReducer from "../components/redux/slices/documentSliseReducer";
import pacientInfoSliseReducer from "../components/redux/slices/pacientInfoSliseReducer";
import zoneInfoSliseReducer from "../components/redux/slices/zoneInfoSliseReducer";
import ogkSliseReducer from "../components/redux/slices/ogkSliseReducer";
import cherepSliseReducer from "../components/redux/slices/cherepSliseReducer";
import ppnSliseReducer from "../components/redux/slices/ppnSliseReducer"
import universalSliceReducer from "../components/redux/slices/universalSliceReducer";

const store = configureStore({
    reducer: {
        creatingZones: newZoneSliseReducer,
        creatingDocument: documentSliseReducer,
        pacientInfo: pacientInfoSliseReducer,
        zoneInfo: zoneInfoSliseReducer,
        ogkInfo: ogkSliseReducer,
        cherepInfo: cherepSliseReducer,
        ppnInfo: ppnSliseReducer,
        universalSlice: universalSliceReducer,
    }
})

export default store