import { configureStore } from "@reduxjs/toolkit";
import newZoneSliseReducer from './slices/newZoneSlise'
import documentSliseReducer from "./slices/documentSliseReducer";
import pacientInfoSliseReducer from "./slices/pacientInfoSliseReducer";
import zoneInfoSliseReducer from "./slices/zoneInfoSliseReducer";
import ogkSliseReducer from "./slices/ogkSliseReducer";
import cherepSliseReducer from "./slices/cherepSliseReducer";
import ppnSliseReducer from "./slices/ppnSliseReducer"
import universalSliceReducer from "./slices/universalSliceReducer";
import newPatientSliseReducer from "./slices/newPatientSliseReducer";
import descriptionOnlyReducer from "./slices/descriptionOnlyReducer";

const store = configureStore({
    reducer: {
        creatingZones: newZoneSliseReducer,
        creatingPatient: newPatientSliseReducer,
        creatingDocument: documentSliseReducer,
        pacientInfo: pacientInfoSliseReducer,
        zoneInfo: zoneInfoSliseReducer,
        ogkInfo: ogkSliseReducer,
        cherepInfo: cherepSliseReducer,
        ppnInfo: ppnSliseReducer,
        universalSlice: universalSliceReducer,
        descriptionOnly: descriptionOnlyReducer,
    }
})

export default store
