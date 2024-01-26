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
  resetZoneInfoSliseReducer,
  applyPatientInfoBlock,
  resetZoneInfoSliseReducerExceptZone,
} from "./redux/slices/zoneInfoSliseReducer";
import { resetogkSliseReducer } from "./redux/slices/ogkSliseReducer";

import { resetCherepSliseReducer } from "./redux/slices/cherepSliseReducer";
import { resetPpnSliseReducer } from "./redux/slices/ppnSliseReducer";
import { resetUniversalSliceReducer } from "./redux/slices/universalSliceReducer";

import {
  addDocText,
  doubleAddPatientAndZoneDocText,
} from "./redux/slices/documentSliseReducer";

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
import {
  editExamNumber,
  resetPacientInfoSliseReducer,
} from "./redux/slices/pacientInfoSliseReducer";
import { initialPatientName } from "../data/initialPatientName";
import { initialPatientBirthYear } from "../data/initialPatientBirthYear";
import { initialExamNumber } from "../data/initialExamNumber";
// import { ZoneInfoPattern } from "../patternsText/zoneInfoPattern";
import { renderToString } from "react-dom/server";
import { ZoneInfoPatternDescriptionOnly } from "../patternsText/zoneInfoPatternDescriptionOnly";
import { ZoneInfoPattern } from "../patternsText/zoneInfoPattern";
import { AddZoneDescriptionOnlyButton } from "./AddZoneDescriptionOnlyButton";
import { RiPlayListAddLine } from "react-icons/ri";

export const DescriptionOnlyImagineOptions = ({ id, editorContent }) => {
  const zoneState = useSelector(
    // (state) => state.descriptionOnly.descriptionState
    (state) => state.zoneInfo.zone
  );
  // const [selectedZone, setSelectedZone] = useState("ОГК");
  const selectedZone = zoneState;

  const [selectedSide, setSelectedSide] = useState("Справа");
  const [selectedOgkViews, setSelectedOgkViews] = useState("Оглядова");
  const [selectedplechKulshSuglobViews, setSelectedplechKulshSuglobViews] =
    useState("Пряма");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState("Норма");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // Вроде работает
  // useEffect(()=>{
  //   dispatch(editZone("ОГК"));
  // }, [])

  const zoneWithSides = zonesWithSides.includes(selectedZone) ? true : false;

  const dispatch = useDispatch();
  // Печатаем текст из шаблона
  const textToDoc = renderToString(ZoneInfoPatternDescriptionOnly());

  const [acceptNotice, setAcceptNotice] = useState(null);

  const handleApplyZone = () => {
    editorContent();

    dispatch(addDocText({ textToDoc }));

    // Сбрасываем данные в редюсерах
    dispatch(resetPacientInfoSliseReducer());
    // dispatch(resetZoneInfoSliseReducer());
    dispatch(resetZoneInfoSliseReducerExceptZone()); //сброс всех параметров кроме zone
    dispatch(resetogkSliseReducer());
    dispatch(resetCherepSliseReducer());
    dispatch(resetPpnSliseReducer());
    dispatch(resetUniversalSliceReducer());

    setAcceptNotice(<div className="overlay"></div>);
    setButtonDisabled(true); // Устанавливаем disabled в true после нажатия кнопки
  };
  const [descriptionOnlyButtonDisabled, setDescriptionOnlyButtonDisabled] =
    useState(true);

  const textFromEditor = useSelector(
    (state) => state.creatingDocument.documentText
  );

  return (
    // <div className="mb-4 p-3 bg-light bg-gradient rounded-3 text-dark border border-secondary ">
    <div className="mb-4 p-3 rounded-3 text-dark border border-info border-3 bg-2ndglass">
      <h5 className="text-white">Description Only</h5>
      <div className="imagineOptions">
        {acceptNotice}

        {/* <FormFloatingSelect
          id="zone"
          items={zones}
          onZoneSelect={setSelectedZone}
          label="Зона дослідження"
        /> */}
        {/* {zoneWithSides ? (
          <FormFloatingSelect
            items={sides}
            onZoneSelect={setSelectedSide}
            label="Сторона"
          />
        ) : null} */}
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

      <div className="d-flex justify-content-between zonesButtons">
        {/* <div className="allChildrenMarginY"> */}
        <div className="">
          {/* <ApplyZonesButton /> */}
          <Button
            title="Надіслати інформацію до Редактора"
            variant="success"
            className="me-2"
            // onClick={handleApplyZone}
            onClick={() => {
              setDescriptionOnlyButtonDisabled(false);
              handleApplyZone();
              // Копируем текст с редактора с новым текстом в буфер обмена
              localStorage.setItem("textToDoc", textFromEditor + textToDoc);
            }}
            disabled={buttonDisabled}
          >
            Додати <RiPlayListAddLine size={18}/>
          </Button>{" "}
          <AddZoneDescriptionOnlyButton
            title="Add Description"
            variant="outline-info"
            descriptionOnlyButtonDisabled={descriptionOnlyButtonDisabled}
            // onAddOptions={onAddOptions}
          />
          {/* <AddZoneButton
            title="Add Protocol"
            variant="outline-success"
            // onAddOptions={onAddOptions}
          /> */}
        </div>
        {/* <DeleteButton
          title="Remove Protocol"
          variant="outline-danger"
          // onClick={() => onDelete(id)}
          id={id}
        /> */}
      </div>
    </div>
  );
};
