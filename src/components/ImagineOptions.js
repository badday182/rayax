import React, { useState } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import DeleteButton from "./deleteButton";
import AddZoneButton from "./addZoneButton";
import { zones } from "../data/zones";
import { zonesWithSides } from "../data/zonesWithSides";
import { sides } from "../data/sides";
import { ogkViews } from "../data/ogkViews";
import { plechKulshSuglobViews } from "../data/plechovuyKulshovuySuglobViews";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  editZone,
  editProaction,
  editSide,
  editNorma,
  resetZoneInfoSliseReducer,
  applyPatientInfoBlock,
  resetZoneInfoSliseReducerExceptZone,
} from "./redux/slices/zoneInfoSliseReducer";
import {
  resetLegenRusynokArray,
  resetKoreniArray,
  resetSynusyArray,
  resetKupalaDiadragmyArray,
  resetCorArray,
  resetOgkZakliuchenniaArray,
  resetogkSliseReducer,
} from "./redux/slices/ogkSliseReducer";

import { resetCherepSliseReducer } from "./redux/slices/cherepSliseReducer";
import { resetPpnSliseReducer } from "./redux/slices/ppnSliseReducer";
import { resetUniversalSliceReducer } from "./redux/slices/universalSliceReducer";
import {
  resetZone,
  resetSide,
  resetProaction,
  resetNorma,
} from "./redux/slices/zoneInfoSliseReducer";

import {
  addDocText,
  doubleAddPatientAndZoneDocText,
} from "./redux/slices/documentSliseReducer";

import { renderToString } from "react-dom/server";
import { ZoneInfoPattern } from "../patternsText/zoneInfoPattern";

import { Ogk } from "./Ogk";
import { Cherep } from "./Cherep";
import { Ppn } from "./Ppn";
import { Shvh } from "./Shvh";
import { Gvh } from "./Gvh";
import { Pvh } from "./Pvh";
import { Ochp } from "./Ochp";
import { PlechovyiSuhlob } from "./PlechovyiSuhlob";
import { Kliuchytsia } from "./Kliuchytsia";
import { Rebra } from "./Rebra";
import { LiktovyiSuhlob } from "./LiktovyiSuhlob";
import { PromenevoZapIastkovyiSuhlob } from "./PromenevoZapIastkovyiSuhlob";
import { Kyst } from "./Kyst";
import { KistokTazu } from "./KistokTazu";
import { KulshovyiSuhlob } from "./KulshovyiSuhlob";
import { KolinnyiSuhlob } from "./KolinnyiSuhlob";
import { HomilkovoStopnyiSuhlob } from "./HomilkovoStopnyiSuhlob";
import { Stopa } from "./Stopa";
import { PeredniViddilyStopy } from "./PeredniViddilyStopy";
import { PacientInfoPattern } from "../patternsText/pacientInfoPattern";
import {
  editExamNumber,
  resetPacientInfoSliseReducer,
} from "./redux/slices/pacientInfoSliseReducer";
import { initialPatientName } from "../data/initialPatientName";
import { initialPatientBirthYear } from "../data/initialPatientBirthYear";
import { initialExamNumber } from "../data/initialExamNumber";
import { AddZoneDescriptionOnlyButton } from "./AddZoneDescriptionOnlyButton";
import { resetDescriptionOnly } from "./redux/slices/newZoneSlise";

export const ImagineOptions = ({ id, editorContent }) => {

  const [selectedZone, setSelectedZone] = useState("ОГК");

  const [selectedSide, setSelectedSide] = useState("Справа");
  const [selectedOgkViews, setSelectedOgkViews] = useState("Оглядова");
  const [selectedplechKulshSuglobViews, setSelectedplechKulshSuglobViews] =
    useState("Пряма");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState("Норма");
  const [addintoEditorButtonDisabled, setAddintoEditorButtonDisabled] =
    useState(false);
  const [descriptionOnlyButtonDisabled, setDescriptionOnlyButtonDisabled] =
    useState(true);

  // Вроде работает
  // useEffect(()=>{
  //   dispatch(editZone("ОГК"));
  // }, [])

  const zoneWithSides = zonesWithSides.includes(selectedZone) ? true : false;

  const dispatch = useDispatch();
  // const state = useSelector((state) => state.creatingDocument.documentText);

  const textToDocPacientInfo = renderToString(PacientInfoPattern());
  const textToDoc = renderToString(ZoneInfoPattern());
  const existPatientName = useSelector((state) => state.pacientInfo.examName);
  const existPatientBirthYear = useSelector(
    (state) => state.pacientInfo.examBirthYear
  );

  const isPatientInfoExist =
    (existPatientName !== initialPatientName) &
    (existPatientBirthYear !== initialPatientBirthYear);
  const examState = useSelector((state) => state.pacientInfo.examNumber);

  const [acceptNotice, setAcceptNotice] = useState(null);

  const handleApplyZone = () => {
    editorContent();
    //Добавляем данные в текстовый редактор

    // dispatch(addDocText({ textToDocPacientInfo }));
    // dispatch(addDocText({ textToDoc }));

    //дублируем функционал из PacientInfo + добавляем зону в эдитор
    if (isPatientInfoExist !== 0) {
      dispatch(
        doubleAddPatientAndZoneDocText({ textToDocPacientInfo, textToDoc })
      );
      dispatch(resetPacientInfoSliseReducer());
      dispatch(applyPatientInfoBlock(true));

      if (examState !== initialExamNumber) {
        dispatch(editExamNumber(+examState + 1));
      }
    } else {
      dispatch(addDocText({ textToDoc }));
    }

    // dispatch(doubleAddPatientAndZoneDocText({ textToDocPacientInfo, textToDoc}));
    //  console.log('isPatientInfoExist', isPatientInfoExist);

    // Сбрасываем данные в редюсерах
    dispatch(resetPacientInfoSliseReducer());
    // dispatch(resetZoneInfoSliseReducer()); //сброс всех параметров
    dispatch(resetZoneInfoSliseReducerExceptZone()); //сброс всех параметров кроме zone
    dispatch(resetogkSliseReducer());

    dispatch(resetCherepSliseReducer());
    dispatch(resetPpnSliseReducer());
    dispatch(resetUniversalSliceReducer());

    setAcceptNotice(<div className="overlay"></div>);
    setAddintoEditorButtonDisabled(true);
    // setDescriptionOnlyButtonDisabled(disabled)
  };

  return (
    // <div className="mb-4 p-3 rounded-3 text-dark border border-light-subtle bg-glass">
    <div className="mb-4 p-3 rounded-3 text-dark border border-light-subtle bg-2ndglass">
      <div className="imagineOptions">
        {acceptNotice}

        <FormFloatingSelect
          id="zone"
          items={zones}
          onZoneSelect={setSelectedZone}
          label="Зона дослідження"
        />
        {zoneWithSides ? (
          <FormFloatingSelect
            items={sides}
            onZoneSelect={setSelectedSide}
            label="Сторона"
          />
        ) : null}
        {selectedZone === "ОГК" ? <Ogk /> : null}
        {selectedZone === "Череп" ? <Cherep /> : null}
        {selectedZone === "ППН" ? <Ppn /> : null}
        {selectedZone === "ШВХ" ? <Shvh /> : null}
        {selectedZone === "ГВХ" ? <Gvh /> : null}
        {selectedZone === "ПВХ" ? <Pvh /> : null}
        {selectedZone === "ОЧП" ? <Ochp /> : null}
        {selectedZone === "Плечовий суглоб" ? <PlechovyiSuhlob /> : null}
        {selectedZone === "Ключиця" ? <Kliuchytsia /> : null}
        {selectedZone === "Ребра" ? <Rebra /> : null}
        {selectedZone === "Ліктьовий суглоб" ? <LiktovyiSuhlob /> : null}
        {selectedZone === "Променево-зап'ястковий суглоб" ? (
          <PromenevoZapIastkovyiSuhlob />
        ) : null}
        {selectedZone === "Кисть" ? <Kyst /> : null}
        {selectedZone === "Кісток тазу" ? <KistokTazu /> : null}
        {selectedZone === "Кульшовий суглоб" ? <KulshovyiSuhlob /> : null}
        {selectedZone === "Колінний суглоб" ? <KolinnyiSuhlob /> : null}
        {selectedZone === "Гомілковостопний суглоб" ? (
          <HomilkovoStopnyiSuhlob />
        ) : null}
        {selectedZone === "Стопа" ? <Stopa /> : null}
        {selectedZone === "Передні відділи стопи" ? (
          <PeredniViddilyStopy />
        ) : null}

        {selectedZone === "Кульшовий суглоб" ||
        selectedZone === "Плечовий суглоб" ? (
          <FormFloatingSelect
            items={plechKulshSuglobViews}
            onZoneSelect={setSelectedplechKulshSuglobViews}
            label="Проєкія"
          />
        ) : null}
      </div>

      <div className="d-flex flex-wrap justify-content-between zonesButtons">
        <div className="allChildrenMarginY">
          <Button
            variant="success"
            className="me-0"
            onClick={() => {
              setDescriptionOnlyButtonDisabled(false);
              handleApplyZone();
            }}
            disabled={addintoEditorButtonDisabled}
          >
            Add into Editor ✅📄
          </Button>{" "}
          <AddZoneButton
            title="New Protocol"
            variant="success"
            onAddOptions={() => {
              // setDescriptionOnlyButtonDisabled(true);
              handleApplyZone();
              dispatch(resetZoneInfoSliseReducer());
            }}
            setDescriptionOnlyButtonTrue={()=>{
              setDescriptionOnlyButtonDisabled(true);
              dispatch(resetZoneInfoSliseReducer());
            }}
            addintoEditorButtonDisabled={addintoEditorButtonDisabled}
          />
          <AddZoneDescriptionOnlyButton
            title="Add Description"
            variant="outline-info"
            descriptionOnlyButtonDisabled={descriptionOnlyButtonDisabled}
            // descriptionOnlyButtonDisabled2={descriptionOnlyButtonDisabled2}
            // onAddOptions={onAddOptions}
          />
        </div>
        <DeleteButton
          title="Remove Protocol"
          variant="outline-danger"
          // onClick={() => onDelete(id)}
          id={id}
        />
      </div>
    </div>
  );
};
