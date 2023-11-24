import React, { useState, useRef } from "react";
import { renderToString } from "react-dom/server";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import PacientInfo from "./pacientInfo";

import Button from "react-bootstrap/Button";

import { ImagineOptions } from "./ImagineOptions";

import { Editor } from "@tinymce/tinymce-react";
import { PacientInfoPattern } from "../patternsText/pacientInfoPattern";
import { addPatient, resetPatient } from "./redux/slices/newPatientSliseReducer";
import { deletePatient } from "./redux/slices/newPatientSliseReducer";
import { resetImagineOptions } from "./redux/slices/newZoneSlise";
export const PacientCard = ({ id }) => {
  const dispatch = useDispatch();
  const zoneState = useSelector((state) => state.creatingZones.zoneCounter);

  return (
    <div className=" rounded-3 border p-3 pacientCard">
      <PacientInfo />
      {zoneState.map((option) => (
        <ImagineOptions key={option.id} id={option.id} />
      ))}
      <div className="d-flex justify-content-between zonesButtons">
        <Button
          variant="success"
          className="w-100"
          onClick={() => {
            const newPatient = {
              id: uuidv4(),
            };
            dispatch(resetPatient());
            dispatch(resetImagineOptions());
            // dispatch(addPatient(newPatient));
          }}
        >
          🚹 New Patient
        </Button>
        {/* <Button
          variant="outline-danger"
          className="backgroundWhite"
          onClick={() => {
            dispatch(deletePatient({ id }));
          }}
        >
          ❌ Remove Patient
        </Button> */}
      </div>
    </div>
  );
};
