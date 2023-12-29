import React, { useState, useRef } from "react";
import { renderToString } from "react-dom/server";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import PatientInfo from "./PatientInfo";
import Button from "react-bootstrap/Button";

import { ImagineOptions } from "./ImagineOptions";

import { Editor } from "@tinymce/tinymce-react";
import { PacientInfoPattern } from "../patternsText/pacientInfoPattern";
import {
  addPatient,
  resetPatient,
} from "./redux/slices/newPatientSliseReducer";
import { deletePatient } from "./redux/slices/newPatientSliseReducer";
import { resetDescriptionOnly, resetImagineOptions } from "./redux/slices/newZoneSlise";
import { addTextFromEditor } from "./redux/slices/documentSliseReducer";
import { resetApplyPatientInfoBlock } from "./redux/slices/zoneInfoSliseReducer";
import { DescriptionOnlyImagineOptions } from "./DescriptionOnlyImagineOptions";

export const PacientCard = ({ id, editorContent }) => {
  const dispatch = useDispatch();
  const zoneState = useSelector((state) => state.creatingZones.zoneCounter);
  const descriptionOnlyState = useSelector(
    (state) => state.creatingZones.zoneDescriptionOnlyCounter
  );
  const DescriptionId = uuidv4();

  // const imagineOptionsRef = useRef();
  return (
    <div className=" rounded-3 border p-3 pacientCard">
      <PatientInfo editorContent={editorContent} />
      {zoneState.map((option) => (
        <ImagineOptions
          editorContent={editorContent}
          key={option.id}
          id={option.id}
        />
      ))}
      {descriptionOnlyState.map((option) => (
        <DescriptionOnlyImagineOptions
          editorContent={editorContent}
          key={option.id}
          id={option.id}
        />
      ))}
      {/* <DescriptionOnlyImagineOptions
        editorContent={editorContent}
        key={DescriptionId}
        id={DescriptionId}
      /> */}
      <div className="d-flex justify-content-between zonesButtons">
        <Button
          // variant="success"
          className="w-100 p-2 glass-button"
          onClick={() => {
            // console.log(editorContent());
            editorContent();
            const newPatient = {
              id: uuidv4(),
            };
            // dispatch(addTextFromEditor(editorContent()));
            dispatch(resetPatient());
            dispatch(resetImagineOptions());
            dispatch(resetDescriptionOnly());
            dispatch(resetApplyPatientInfoBlock());
            dispatch(resetDescriptionOnly()); // сброс стейта для описания без шапки
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
