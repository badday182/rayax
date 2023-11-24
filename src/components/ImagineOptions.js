import React, { useState, useEffect } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import DeleteButton from "./deleteButton";
import AddZoneButton from "./addZoneButton";
import { zones } from "../data/zones";
import { zonesWithSides } from "../data/zonesWithSides";
import { sides } from "../data/sides";
import { ogkViews } from "../data/ogkViews";
import { plechKulshSuglobViews } from "../data/plechovuyKulshovuySuglobViews";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {
  editZone,
  editProaction,
  editSide,
  editNorma,
  resetZoneInfoSliseReducer,
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

import { addDocText } from "./redux/slices/documentSliseReducer";

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

export const ImagineOptions = ({ id }) => {
  const [selectedZone, setSelectedZone] = useState("ОГК");

  const [selectedSide, setSelectedSide] = useState("Справа");
  const [selectedOgkViews, setSelectedOgkViews] = useState("Оглядова");
  const [selectedplechKulshSuglobViews, setSelectedplechKulshSuglobViews] =
    useState("Пряма");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState("Норма");

  // Вроде работает
  // useEffect(()=>{
  //   dispatch(editZone("ОГК"));
  // }, [])

  const zoneWithSides = zonesWithSides.includes(selectedZone) ? true : false;

  const dispatch = useDispatch();
  // const state = useSelector((state) => state.creatingDocument.documentText);

  const textToDoc = renderToString(ZoneInfoPattern());

  const [acceptNotice, setAcceptNotice] = useState(null);

  const handleApplyZone = () => {
    //Добавляем данные в текстовый редактор
    dispatch(addDocText({ textToDoc }));
    // Сбрасываем данные в редюсерах
    dispatch(resetZoneInfoSliseReducer());
    dispatch(resetogkSliseReducer());

    dispatch(resetCherepSliseReducer());
    dispatch(resetPpnSliseReducer());
    dispatch(resetUniversalSliceReducer());

    setAcceptNotice(<div className="overlay"></div>);
  };

  return (
    <div className="mb-4 p-3 bg-light bg-gradient rounded-3 text-dark border border-secondary ">
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
        {selectedZone === "ОГК" ? (
          <Ogk />
        ) : // <FormFloatingSelect
        //   items={ogkViews}
        //   onZoneSelect={setSelectedOgkViews}
        //   label="Проєкія"
        // />
        null}
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
        {selectedZone === "Гомілково-стопний суглоб" ? (
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
        <div>
          {/* <ApplyZonesButton /> */}
          <Button variant="success" className="me-2" onClick={handleApplyZone}>
            Apply
          </Button>{" "}
          <AddZoneButton
            title="Add zone"
            variant="outline-success"
            // onAddOptions={onAddOptions}
          />
        </div>
        <DeleteButton
          title="Remove Zone"
          variant="outline-danger"
          // onClick={() => onDelete(id)}
          id={id}
        />
      </div>
    </div>
  );
};
